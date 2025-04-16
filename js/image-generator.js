// AOS (Animate On Scroll) ライブラリの追加
document.head.innerHTML += '<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">';
document.body.innerHTML += '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>';

// ロゴ画像の生成
function generateLogo() {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 50;
  const ctx = canvas.getContext('2d');
  
  // グラデーション背景
  const gradient = ctx.createLinearGradient(0, 0, 200, 0);
  gradient.addColorStop(0, '#4361ee');
  gradient.addColorStop(1, '#7209b7');
  
  // ロゴテキスト
  ctx.fillStyle = gradient;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('TalentAI', 10, 35);
  
  // アイコン
  ctx.beginPath();
  ctx.arc(170, 25, 15, 0, Math.PI * 2);
  ctx.fillStyle = '#f72585';
  ctx.fill();
  
  // 白いアイコン内部
  ctx.beginPath();
  ctx.moveTo(165, 25);
  ctx.lineTo(175, 20);
  ctx.lineTo(175, 30);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  return canvas.toDataURL();
}

// 白いロゴの生成
function generateWhiteLogo() {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 50;
  const ctx = canvas.getContext('2d');
  
  // ロゴテキスト
  ctx.fillStyle = 'white';
  ctx.font = 'bold 28px Arial';
  ctx.fillText('TalentAI', 10, 35);
  
  // アイコン
  ctx.beginPath();
  ctx.arc(170, 25, 15, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  // 色付きアイコン内部
  ctx.beginPath();
  ctx.moveTo(165, 25);
  ctx.lineTo(175, 20);
  ctx.lineTo(175, 30);
  ctx.closePath();
  ctx.fillStyle = '#f72585';
  ctx.fill();
  
  return canvas.toDataURL();
}

// ヒーロー画像の生成
function generateHeroImage() {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  
  // 背景
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, 600, 400);
  
  // ダッシュボード風の要素
  ctx.fillStyle = 'white';
  ctx.fillRect(50, 50, 500, 300);
  ctx.strokeStyle = '#e9ecef';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, 500, 300);
  
  // ヘッダー部分
  ctx.fillStyle = '#4361ee';
  ctx.fillRect(50, 50, 500, 60);
  
  // グラフ要素
  ctx.fillStyle = '#e9ecef';
  ctx.fillRect(70, 130, 200, 200);
  
  // 円グラフ
  ctx.beginPath();
  ctx.arc(170, 230, 80, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.strokeStyle = '#4361ee';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // 円グラフのセグメント
  ctx.beginPath();
  ctx.moveTo(170, 230);
  ctx.arc(170, 230, 80, 0, Math.PI * 0.7);
  ctx.closePath();
  ctx.fillStyle = '#4361ee';
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(170, 230);
  ctx.arc(170, 230, 80, Math.PI * 0.7, Math.PI * 1.2);
  ctx.closePath();
  ctx.fillStyle = '#7209b7';
  ctx.fill();
  
  // リスト要素
  ctx.fillStyle = '#e9ecef';
  ctx.fillRect(290, 130, 240, 40);
  ctx.fillRect(290, 180, 240, 40);
  ctx.fillRect(290, 230, 240, 40);
  ctx.fillRect(290, 280, 240, 40);
  
  // AIアイコン
  ctx.fillStyle = 'rgba(247, 37, 133, 0.2)';
  ctx.beginPath();
  ctx.arc(450, 100, 80, 0, Math.PI * 2);
  ctx.fill();
  
  return canvas.toDataURL();
}

// 利点画像の生成
function generateBenefitImage(number) {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  
  // 背景
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, 500, 300);
  
  if (number === 1) {
    // 効率化を表す画像
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 50, 400, 200);
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 400, 200);
    
    // 時計アイコン
    ctx.beginPath();
    ctx.arc(150, 150, 70, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = '#4361ee';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 時計の針
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 100);
    ctx.strokeStyle = '#4361ee';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(190, 170);
    ctx.strokeStyle = '#7209b7';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // 矢印
    ctx.beginPath();
    ctx.moveTo(250, 150);
    ctx.lineTo(350, 150);
    ctx.strokeStyle = '#4361ee';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(350, 150);
    ctx.lineTo(330, 130);
    ctx.lineTo(330, 170);
    ctx.closePath();
    ctx.fillStyle = '#4361ee';
    ctx.fill();
    
  } else if (number === 2) {
    // マッチング精度を表す画像
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 50, 400, 200);
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 400, 200);
    
    // ターゲットアイコン
    ctx.beginPath();
    ctx.arc(150, 150, 70, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = '#4361ee';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#7209b7';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2);
    ctx.strokeStyle = '#f72585';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 150, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#f72585';
    ctx.fill();
    
    // パズルピース
    ctx.fillStyle = '#4361ee';
    ctx.fillRect(280, 120, 60, 60);
    ctx.beginPath();
    ctx.arc(310, 120, 15, Math.PI, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#7209b7';
    ctx.fillRect(320, 120, 60, 60);
    ctx.beginPath();
    ctx.arc(350, 150, 15, Math.PI * 1.5, Math.PI * 0.5);
    ctx.fill();
    
  } else {
    // データ分析を表す画像
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 50, 400, 200);
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 400, 200);
    
    // グラフ
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(100, 100);
    ctx.lineTo(400, 100);
    ctx.strokeStyle = '#4361ee';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // バー
    ctx.fillStyle = '#4361ee';
    ctx.fillRect(150, 150, 30, 50);
    
    ctx.fillStyle = '#7209b7';
    ctx.fillRect(200, 130, 30, 70);
    
    ctx.fillStyle = '#f72585';
    ctx.fillRect(250, 170, 30, 30);
    
    ctx.fillStyle = '#4361ee';
    ctx.fillRect(300, 120, 30, 80);
    
    ctx.fillStyle = '#7209b7';
    ctx.fillRect(350, 140, 30, 60);
  }
  
  return canvas.toDataURL();
}

// デモプレビュー画像の生成
function generateDemoPreview() {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  
  // 背景
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, 600, 400);
  
  // ビデオプレーヤー風の要素
  ctx.fillStyle = '#212529';
  ctx.fillRect(50, 50, 500, 300);
  
  // 再生ボタン
  ctx.beginPath();
  ctx.arc(300, 200, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(285, 175);
  ctx.lineTo(285, 225);
  ctx.lineTo(325, 200);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  // テキスト
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('TalentAI デモ動画', 230, 300);
  
  return canvas.toDataURL();
}

// 証言者のアバター画像生成
function generateTestimonialAvatar(number) {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  
  // 背景
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, 100, 100);
  
  // 円形のアバター
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI * 2);
  
  // 異なる色を使用
  if (number === 1) {
    ctx.fillStyle = '#4361ee';
  } else if (number === 2) {
    ctx.fillStyle = '#7209b7';
  } else {
    ctx.fillStyle = '#f72585';
  }
  
  ctx.fill();
  
  // 人物シルエット
  ctx.beginPath();
  ctx.arc(50, 40, 15, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(30, 90);
  ctx.quadraticCurveTo(50, 60, 70, 90);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  return canvas.toDataURL();
}

// ファビコンの生成
function generateFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  // 背景
  ctx.beginPath();
  ctx.arc(16, 16, 16, 0, Math.PI * 2);
  
  const gradient = ctx.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, '#4361ee');
  gradient.addColorStop(1, '#7209b7');
  
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // T文字
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Arial';
  ctx.fillText('T', 10, 22);
  
  return canvas.toDataURL();
}

// 画像の生成と設定
window.onload = function() {
  // ロゴ画像の設定
  const logoImg = document.querySelector('.logo');
  if (logoImg) logoImg.src = generateLogo();
  
  const footerLogo = document.querySelector('.footer-logo');
  if (footerLogo) footerLogo.src = generateWhiteLogo();
  
  // ヒーロー画像の設定
  const heroImg = document.querySelector('.hero-image img');
  if (heroImg) heroImg.src = generateHeroImage();
  
  // 利点画像の設定
  const benefitImgs = document.querySelectorAll('[src*="benefit-"]');
  benefitImgs.forEach((img, index) => {
    img.src = generateBenefitImage(index + 1);
  });
  
  // デモプレビュー画像の設定
  const demoImg = document.querySelector('[src*="demo-preview"]');
  if (demoImg) demoImg.src = generateDemoPreview();
  
  // 証言者のアバター画像設定
  const testimonialImgs = document.querySelectorAll('[src*="testimonial-"]');
  testimonialImgs.forEach((img, index) => {
    img.src = generateTestimonialAvatar(index + 1);
  });
  
  // ファビコンの設定
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) favicon.href = generateFavicon();
};
