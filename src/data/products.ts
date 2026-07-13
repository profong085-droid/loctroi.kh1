export type CategoryType = 'all' | 'insecticide' | 'herbicide' | 'fungicide' | 'molluscicide' | 'fertilizer' | 'seed' | 'special';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  categoryKh: string;
  usage: string;
}

export const productsData: Product[] = [
  // Insecticides
  { id: "aceta-5ec", name: "ACETA 5EC", image: "photo/ACETA 5EC-1.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "anboom-40-ec", name: "Anboom 40 EC", image: "photo/Anboom 40.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "ankill-a", name: "Ankill A", image: "photo/Ankill A-n.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "apropo-200se", name: "APROPO 200SE", image: "photo/APROPO 200SE.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "cyperan-25ec", name: "Cyperan 25EC", image: "photo/Cyperan.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "diazan-50-ec", name: "Diazan 50 EC", image: "photo/Diazan 50 EC.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "evitin-50-sc", name: "Evitin 50 SC", image: "photo/Evitin 50 SC.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "facinate", name: "Facinate", image: "photo/Facinate.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "facinate-4-5l", name: "Facinate 4.5L", image: "photo/Facinate 4.5L-1.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "fuan-40ec", name: "FUAN 40EC", image: "photo/FUAN 40EC.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "icypro-600-wp", name: "ICYPRO 600 WP", image: "photo/ICYPRO 600 WP.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "jetan", name: "Jetan", image: "photo/Jetan.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "kinalux", name: "Kinalux", image: "photo/Kinalux.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "lancer-gold", name: "Lancer Gold", image: "photo/Lancer Gold.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "lt-thrip-250-wg", name: "LT-THRIP 250 WG", image: "photo/LT-THRIP 250 WG.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "meco-60-ec", name: "Meco 60 EC", image: "photo/Meco 60 EC 1.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "pup-g-6ec", name: "PUP-G 6EC", image: "photo/PUP-G 6EC.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "saltare", name: "SALTARE", image: "photo/SALTARE 1.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "savant", name: "SAVANT", image: "photo/SAVANT.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },
  { id: "kla-khlang", name: "KLA KHLANG", image: "photo/KLA KHLANG.png", category: "insecticide", categoryKh: "ថ្នាំសម្លាប់សត្វល្អិត", usage: "របៀបប្រើប្រាស់: លាយ ១៥-២០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ស្រោចឲ្យសព្វលើស្លឹកនៅពេលសត្វល្អិតចាប់ផ្តើមបំផ្លាញ។" },

  // Herbicides
  { id: "anpuma", name: "ANPUMA", image: "photo/ANPUMA.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "anco-600sl", name: "Anco 600SL", image: "photo/Anco 600SL-480ml.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "anco-720sl", name: "Anco 720SL", image: "photo/Anco 720SL.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "dongkov", name: "DONGKOV", image: "photo/DONGKOV.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "fila-super", name: "FILA SUPER", image: "photo/FILA SUPER.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "glyphosan-480-sl", name: "Glyphosan 480 SL", image: "photo/Glyphosan 480 SL.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "glyphosan-757sg", name: "Glyphosan 757SG", image: "photo/Glyphosan 757SG.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },
  { id: "novzin", name: "Novzin", image: "photo/Novzin.png", category: "herbicide", categoryKh: "ថ្នាំកំចាត់ស្មៅ", usage: "របៀបប្រើប្រាស់: លាយ ៥០-៨០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់មុន ឬក្រោយពេលស្មៅដុះចាប់ពី ៣-៧ ថ្ងៃ។" },

  // Fungicides
  { id: "bipro-super", name: "BIPRO SUPER", image: "photo/BIPRO SUPER.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "bistar-top", name: "BISTAR TOP", image: "photo/BISTAR TOP.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "floram-500wp", name: "FLORAM 500WP", image: "photo/FLORAM 500WP.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "insuran-n", name: "Insuran-N", image: "photo/Insuran-N.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "mastercop", name: "Mastercop", image: "photo/Mastercop.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "ricebeaux", name: "RICEBEAUX", image: "photo/RICEBEAUX.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "totan", name: "TOTAN", image: "photo/TOTAN.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "totan-c-o-21sl", name: "Totan C-O 21SL", image: "photo/Totan C-O 21SL.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "validan-3-sl", name: "Validan 3 SL", image: "photo/Validan 3 SL.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },
  { id: "validan-5sl", name: "Validan 5SL", image: "photo/Validan 5SL.png", category: "fungicide", categoryKh: "ថ្នាំកំចាត់ផ្សិត", usage: "របៀបប្រើប្រាស់: លាយ ២០-២៥ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់ការពារមុនពេលមានជំងឺ ឬបាញ់ពេលសង្កេតឃើញរោគសញ្ញា។" },

  // Molluscicides
  { id: "anhead-12-gr", name: "ANHEAD 12 GR", image: "photo/ANHEAD 12.png", category: "molluscicide", categoryKh: "ថ្នាំកំចាត់ខ្យង", usage: "របៀបប្រើប្រាស់: បាច ១ គីឡូក្រាម ក្នុងមួយហិកតា។ បាចឲ្យស្មើលើផ្ទៃស្រែក្រោយពេលព្រោះស្រូវរួច ១-៣ ថ្ងៃ។" },
  { id: "metazin-67sc", name: "METAZIN 67SC", image: "photo/METAZIN 67SC.png", category: "molluscicide", categoryKh: "ថ្នាំកំចាត់ខ្យង", usage: "របៀបប្រើប្រាស់: បាច ១ គីឡូក្រាម ក្នុងមួយហិកតា។ បាចឲ្យស្មើលើផ្ទៃស្រែក្រោយពេលព្រោះស្រូវរួច ១-៣ ថ្ងៃ។" },

  // Fertilizers
  { id: "bao-dam-black", name: "BAO DAM Black", image: "photo/BAO Dam Black-LT.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "bao-urea-black", name: "BAO Urea Black", image: "photo/BAO Urea Black.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "vian-5-2-2", name: "VIAN 5-2-2 (រ៉ាវ/ហូ)", image: "photo/BAO VIAN-5-2-2 RAU_HOA.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "vian-6-4-2", name: "VIAN 6-4-2 (ស្រូវ/ពោត)", image: "photo/BAO VIAN-6-4-2 LUA_BAP.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "hi-boron", name: "Hi-Boron", image: "photo/Hi-Boron.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "hi-potassium-c30", name: "Hi-Potassium C30", image: "photo/Hi-Potassium C30.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "ltc-loc-troi-28", name: "LTC-LOC TROI 28", image: "photo/LTC-LOC TROI 28.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "ltc-nang-hoa-9", name: "LTC-NANG HOA 9", image: "photo/LTC-NANG HOA9.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "npk-20-10-10", name: "NPK 20-10-10", image: "photo/NPK -20-10-10.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },
  { id: "silimax", name: "SILIMAX", image: "photo/SILIMAX.png", category: "fertilizer", categoryKh: "ជីកសិកម្ម", usage: "របៀបប្រើប្រាស់: បាច ៥០ គីឡូក្រាម ក្នុងមួយហិកតា។ ប្រើនៅដំណាក់កាលលូតលាស់ ឬដំណាក់កាលចេញផ្កា/ផ្លែ។" },

  // Rice Seeds
  { id: "ir50404-nc", name: "IR50404 NC", image: "photo/3D - IR50404 NC.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "ir50404-xn1", name: "IR50404 XN1", image: "photo/3D - IR50404 XN1.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "bap-nu-1kg", name: "BAP NU 1kg", image: "photo/3D - LTC - BAP NU - 1kg.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "bap-nu-20kg", name: "BAP NU 20kg", image: "photo/3D - LTC - BAP NU - 20kg.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "lt11", name: "LT11", image: "photo/3D - LTC - LT11 - mat truoc.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "lvn10-1kg", name: "LVN10 1kg", image: "photo/3D - LTC - LVN10 - 1kg.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "lvn10-20kg", name: "LVN10 20kg", image: "photo/3D - LTC - LVN10 - 20kg.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "om5451-nc", name: "OM5451 NC", image: "photo/3D - OM5451 NC.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "om5451-xn1", name: "OM5451 XN1", image: "photo/3D - OM5451 XN1.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "dx208-20kg", name: "DX208 20kg", image: "photo/LTC_DX208-LTS MAT TRUOC - 20kg.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },
  { id: "dx208-1kg", name: "DX208 1kg", image: "photo/LTC_DX208-LTS mat truoc - tui 1kg.png", category: "seed", categoryKh: "ពូជស្រូវ", usage: "របៀបប្រើប្រាស់: ព្រោះ ១៥០-២០០ គីឡូក្រាម ក្នុងមួយហិកតា។ រៀបចំដីឲ្យបានស្អាតល្អមុនពេលព្រោះ។" },

  // Special Products
  { id: "boom-flower", name: "BOOM-FLOWER", image: "photo/BOOM-FLOWER (2019_500ml)-02.png", category: "special", categoryKh: "ផលិតផលពិសេស", usage: "របៀបប្រើប្រាស់: លាយ ២០-៣០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់បំប៉ននៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់ដើម្បីទទួលបានទិន្នផលខ្ពស់។" },
  { id: "brano-0-01sl", name: "BRANO 0.01SL", image: "photo/BRANO 0.01SL.png", category: "special", categoryKh: "ផលិតផលពិសេស", usage: "របៀបប្រើប្រាស់: លាយ ២០-៣០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់បំប៉ននៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់ដើម្បីទទួលបានទិន្នផលខ្ពស់។" },
  { id: "i-dol", name: "I-dol", image: "photo/I-dol.png", category: "special", categoryKh: "ផលិតផលពិសេស", usage: "របៀបប្រើប្រាស់: លាយ ២០-៣០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់បំប៉ននៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់ដើម្បីទទួលបានទិន្នផលខ្ពស់។" },
  { id: "vitazyme", name: "Vitazyme", image: "photo/Vitazyme-n.png", category: "special", categoryKh: "ផលិតផលពិសេស", usage: "របៀបប្រើប្រាស់: លាយ ២០-៣០ ម.ល ក្នុងទឹក ២៥ លីត្រ។ បាញ់បំប៉ននៅពេលព្រឹកព្រលឹម ឬល្ងាចត្រជាក់ដើម្បីទទួលបានទិន្នផលខ្ពស់។" },
  { id: "new-product-1", name: "ផលិតផលថ្មី ១", image: "photo/photo_2026-03-18_17-22-46 (2).png", category: "special", categoryKh: "ផលិតផលពិសេស", usage: "របៀបប្រើប្រាស់: មើលការណែនាំនៅលើសំបកវេចខ្ចប់។" },
  { id: "new-product-2", name: "ផលិតផលថ្មី ២", image: "photo/photo_2026-03-18_17-22-47.png", category: "special", categoryKh: "ផលិតផលពិសេស", usage: "របៀបប្រើប្រាស់: មើលការណែនាំនៅលើសំបកវេចខ្ចប់។" },
];

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "all", name: "ទាំងអស់", icon: "layout-grid" },
  { id: "insecticide", name: "ថ្នាំសម្លាប់សត្វល្អិត", icon: "bug" },
  { id: "herbicide", name: "ថ្នាំកំចាត់ស្មៅ", icon: "leaf" },
  { id: "fungicide", name: "ថ្នាំកំចាត់ផ្សិត", icon: "shield-alert" },
  { id: "molluscicide", name: "ថ្នាំកំចាត់ខ្យង", icon: "snail" },
  { id: "fertilizer", name: "ជីកសិកម្ម", icon: "flask-conical" },
  { id: "seed", name: "ពូជស្រូវ", icon: "wheat" },
  { id: "special", name: "ផលិតផលពិសេស", icon: "star" },
];
