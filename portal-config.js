/**
 * 甲南高校 公共「AI時代のウェルビーイング」
 * 4クラス統合・自動判定URL設定ファイル
 */
(function() {
  // ■ 4クラス別のURL定義（スライドURLのみクラス別、他は共通）
  const CLASS_CONFIGS = {
    "1": {
      classId: "01",
      className: "79期生 1組",
      slidesLesson1to3: "https://docs.google.com/presentation/d/1DoMNK8Eymtb_sDXxjQsxMD0rc_hKxx7b8abW0wEmP3Y/edit?usp=sharing", // 1組用スライド
      slidesLesson4: "https://docs.google.com/presentation/d/1YAviTSY8RN0Yn3p2CdKbmXcLVhjhX_vQ8Cp52Omzvok/edit?usp=sharing"       // 1組用第4時スライド
    },
    "2": {
      classId: "02",
      className: "79期生 2組",
      slidesLesson1to3: "https://docs.google.com/presentation/d/1oZWxwmBMGCXE-wG05HGO2GypkI23Mzb-0jiNYHzEdws/edit?usp=sharing",
      slidesLesson4: "https://docs.google.com/presentation/d/1CoH7ubzDm7xJZSENNUUGx-oTMhFCnX3PzTUs7dKiwEM/edit?usp=sharing"
    },
    "3": {
      classId: "03",
      className: "79期生 3組",
      slidesLesson1to3: "https://docs.google.com/presentation/d/1CzbFVkWRqfymgrROM5TLHr23YU2573YmAyre8uqQaYQ/edit?usp=sharing",
      slidesLesson4: "https://docs.google.com/presentation/d/1vZcb0p-ArEPIIcVQ3gFaEVDAh0nOBUHGDsQMfD2jbUA/edit?usp=sharing"
    },
    "4": {
      classId: "04",
      className: "79期生 4組",
      slidesLesson1to3: "https://docs.google.com/presentation/d/1hxZYo9yYG0oPEXVhf8uqgPbBP-VWdWg8tvEzqa_6WJM/edit?usp=sharing",
      slidesLesson4: "https://docs.google.com/presentation/d/1C9YRcCnDwr6e9bTA_pxageuTiQhdRm_gSDXPSlv3fmk/edit?usp=sharing"
    }
  };

  // ■ 全クラス共通のURL
  const COMMON_CONFIG = {
    geminiNotebookUrl: "https://notebook.google.com/notebook/466524b1-4140-490b-9f4a-a7d7f7a12524",
    formLesson1Pre: "https://forms.gle/gfAYJLBWUzJc3eEs9",
    formLesson1Exit: "https://forms.gle/2w8dtmixz4EvrpbA8",
    formLesson2Exit: "https://forms.gle/BYc4GkxPuA3nvYJn8",
    formLesson3Exit: "https://forms.gle/93zWvvKaTytyuFzd6",
    formLesson4Exit: "https://forms.gle/PvrDXLn3EboPpZpm9"
  };

  // ■ 自動クラス判定ロジック（URLパラメータ ?class=1 を優先、次にsessionStorage、無ければ1組）
  const params = new URLSearchParams(window.location.search);
  let currentClass = params.get('class');

  if (currentClass && CLASS_CONFIGS[currentClass]) {
    try { sessionStorage.setItem('konan_current_class', currentClass); } catch(e) {}
  } else {
    try { currentClass = sessionStorage.getItem('konan_current_class'); } catch(e) {}
  }

  // デフォルトは1組
  if (!currentClass || !CLASS_CONFIGS[currentClass]) {
    currentClass = "1";
  }

  // 設定を合体してグローバルに展開
  window.PORTAL_CONFIG = Object.assign({}, COMMON_CONFIG, CLASS_CONFIGS[currentClass]);
})();