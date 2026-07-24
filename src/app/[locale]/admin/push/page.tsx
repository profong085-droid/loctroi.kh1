"use client";

import { useState, useEffect, useCallback } from "react";
import { Bell, Send, Lock, ShieldCheck, CheckCircle2, AlertCircle, Smartphone, History, Sparkles, Loader2, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

interface HistoryItem {
  id: string;
  title: string;
  message: string;
  url: string;
  sentAt: string;
  sentCount: number;
}

export default function AdminPushPage() {
  const [passkey, setPasskey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const [title, setTitle] = useState(" ថ្នាំកម្ចាត់ស្មៅ RICEBEAUX មានស្តុកថ្មីហើយ!");
  const [message, setMessage] = useState("ទទួលបានការបញ្ចុះតម្លៃពិសេស ១០% សម្រាប់កសិករធ្វើស្រូវ។ ចូលមើលព័ត៌មានបន្ថែមឥឡូវនេះ!");
  const [url, setUrl] = useState("/kh/product/ricebeaux");

  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [subscriberCount, setSubscriberCount] = useState(0);

  const fetchSubscribersCount = useCallback(async () => {
    try {
      const res = await fetch("/api/push/subscribe");
      const data = await res.json();
      setSubscriberCount(data.subscriberCount || 0);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchHistory = useCallback(async () => {
    try {
      const res = await fetch("/api/push/send");
      const data = await res.json();
      setHistory(data.history || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Load Subscribers Count & History
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSubscribersCount();
      fetchHistory();
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchSubscribersCount, fetchHistory]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "loctroi2026") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("លេខកូដសំងាត់មិនត្រឹមត្រូវឡើយ (Incorrect Passkey)");
    }
  };

  const handleSendBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message) return;

    setIsSending(true);
    setStatusMsg(null);

    try {
      const res = await fetch("/api/push/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          message,
          url,
          passkey: "loctroi2026",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMsg({ type: "success", text: data.message });
        fetchHistory();
        fetchSubscribersCount();
      } else {
        setStatusMsg({ type: "error", text: data.error || "មានបញ្ហាក្នុងការផ្ញើសារ" });
      }
    } catch {
      setStatusMsg({ type: "error", text: "មិនអាចភ្ជាប់ទៅកាន់ Server បានឡើយ" });
    } finally {
      setIsSending(false);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md bg-linear-to-b from-slate-900 via-primary-950 to-slate-950 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/30 mb-4">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-black text-white mb-1">Admin Notification Panel</h1>
            <p className="text-xs text-slate-400">ប្រព័ន្ធផ្ញើសារជូនដំណឹងទៅទូរសព្ទកសិករ</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                លេខកូដសំងាត់ (Admin Passkey)
              </label>
              <input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="បញ្ចូលលេខកូដ (loctroi2026)"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm"
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                <AlertCircle size={16} />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-black rounded-xl shadow-lg shadow-emerald-500/30 transition-all text-sm cursor-pointer"
            >
              ចូលប្រើប្រាស់ (Login)
            </button>
          </form>
        </div>
      </main>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 pb-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/30 shrink-0">
              <Bell size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                <ShieldCheck size={14} />
                <span>ADMIN BROADCAST DASHBOARD</span>
              </div>
              <h1 className="text-2xl font-black text-white">ផ្ញើសារជូនដំណឹងទៅទូរសព្ទកសិករ</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-emerald-950/60 px-5 py-3 rounded-2xl border border-emerald-500/30">
            <Smartphone className="text-emerald-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">ទូរសព្ទដែលបានដំឡេីង</span>
              <span className="text-lg font-black text-emerald-400 leading-none">
                {subscriberCount > 0 ? subscriberCount : "1+"} ឧបករណ៍ (Devices)
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Form + Live Phone Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Push Form (7 Cols) */}
          <div className="lg:col-span-7 bg-linear-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            <h2 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2">
              <Sparkles className="text-emerald-400" size={18} />
              <span>សរសេរខ្លឹមសារសារជូនដំណឹង</span>
            </h2>

            <form onSubmit={handleSendBroadcast} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  📌 ចំណងជើងសារ (Notification Title)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="បញ្ចូលចំណងជើងសារ..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  📝 ខ្លឹមសារសារ (Message Content)
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="បញ្ចូលខ្លឹមសារសារ..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-medium leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  🔗 Link បើកទៅកាន់ (Target URL)
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="/kh/product/ricebeaux"
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-mono text-emerald-400"
                  />
                </div>
              </div>

              {statusMsg && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl text-xs font-bold border ${
                    statusMsg.type === "success"
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                      : "bg-red-500/10 text-red-300 border-red-500/30"
                  }`}
                >
                  {statusMsg.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{statusMsg.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-linear-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>កំពុងផ្ញើសារទៅទូរសព្ទទាំងអស់...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>🚀 ផ្ញើសារជូនដំណឹងទៅទូរសព្ទទាំងអស់ (Send Broadcast)</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Live Mobile Lockscreen Preview (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Smartphone size={16} />
              <span>មើលទម្រង់សារលើទូរសព្ទកសិករ (Live Mobile Lockscreen Preview)</span>
            </h3>

            {/* Mobile Phone Mockup */}
            <div className="w-full max-w-sm bg-slate-900 border-4 border-slate-700 rounded-[40px] p-4 shadow-2xl relative overflow-hidden">
              {/* Phone Camera Notch */}
              <div className="w-32 h-5 bg-slate-800 mx-auto rounded-b-2xl mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900" />
              </div>

              {/* Phone Time */}
              <div className="text-center mb-8">
                <div className="text-3xl font-black text-white/90">17:15</div>
                <div className="text-[10px] text-slate-400 font-medium">ថ្ងៃសុក្រ, ២៤ កក្កដា ២០២៦</div>
              </div>

              {/* Notification Card on Lockscreen */}
              <div className="bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 p-0.5 overflow-hidden flex items-center justify-center">
                      <Image src="/photo/logo loctroi 6.png" alt="Logo" width={24} height={24} className="object-contain" />
                    </div>
                    <span className="text-[11px] font-bold text-white">Loc Troi Cambodia</span>
                  </div>
                  <span className="text-[10px] text-slate-400">ឥឡូវនេះ (now)</span>
                </div>

                <div className="text-xs font-bold text-emerald-300 leading-snug">
                  {title || "ចំណងជើងសារ..."}
                </div>

                <div className="text-[11px] text-slate-300 leading-relaxed">
                  {message || "ខ្លឹមសារសារ..."}
                </div>
              </div>

              <div className="mt-8 text-center text-[10px] text-slate-500 font-medium">
                សារនឹងលោតលើអេក្រង់ទូរសព្ទកសិករដូចរូបខាងលើនេះ
              </div>
            </div>
          </div>

        </div>

        {/* History Log Table */}
        <div className="mt-12 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <History size={18} className="text-emerald-400" />
            <span>ប្រវត្តិសារដែលបានផ្ញើរួច (Sent Notification History)</span>
          </h3>

          {history.length === 0 ? (
            <p className="text-xs text-slate-500 py-4">មិនទាន់មានប្រវត្តិផ្ញើសារនៅឡើយ។</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="pb-3">កាលបរិច្ឆេទ</th>
                    <th className="pb-3">ចំណងជើងសារ</th>
                    <th className="pb-3">ខ្លឹមសារ</th>
                    <th className="pb-3 text-right">អ្នកទទួលបាន</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {history.map((item) => (
                    <tr key={item.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 text-slate-400 whitespace-nowrap">
                        {new Date(item.sentAt).toLocaleString()}
                      </td>
                      <td className="py-3 font-bold text-emerald-300 whitespace-nowrap">
                        {item.title}
                      </td>
                      <td className="py-3 text-slate-300 max-w-xs truncate">
                        {item.message}
                      </td>
                      <td className="py-3 text-right font-bold text-white whitespace-nowrap">
                        {item.sentCount} ឧបករណ៍
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
