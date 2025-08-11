'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [todayCount, setTodayCount] = useState({ users: 12847, photos: 847293 });
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [savedAmount, setSavedAmount] = useState(0);

  // 模擬即時計數器
  useEffect(() => {
    const interval = setInterval(() => {
      setTodayCount(prev => ({
        users: prev.users + Math.floor(Math.random() * 5),
        photos: prev.photos + Math.floor(Math.random() * 100)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 倒計時
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 計算節省金額動畫
  useEffect(() => {
    const target = 4280;
    const increment = target / 100;
    const timer = setInterval(() => {
      setSavedAmount(prev => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        }
        return prev;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    { q: '為什麼比其他工具快 10 倍？', a: '採用本地處理技術，無需上傳下載。競品多為網頁工具需要網路傳輸，我們純離線轉檔，速度更快。' },
    { q: '支援哪些輸出格式？', a: '目前支援 PNG 和 JPG 兩種最常用格式。PNG 適合需要透明背景的場景，JPG 適合一般照片分享。' },
    { q: '真的完全離線嗎？會偷傳照片嗎？', a: '100% 離線處理，可在飛航模式下使用。照片完全不會離開你的裝置，絕對安全。' },
    { q: '轉檔後檔案大小如何？', a: 'PNG 格式保持無損品質，檔案較大；JPG 格式可自訂壓縮率，在品質和大小間取得平衡。' },
    // { q: '批次轉檔有數量限制嗎？', a: '專業版無數量限制，可一次處理數百張照片。免費版每日限制 10 張。' },
    { q: '可以調整輸出品質嗎？', a: 'PNG 保持原始品質無損輸出，JPG 可選擇品質等級（高/中/低），滿足不同使用需求。' }
  ];

  const competitors = [
    { name: '線上轉換器', speed: '5-10分鐘/張', privacy: '上傳到雲端', quality: '壓縮畫質', price: '免費(有廣告)' },
    { name: 'Adobe工具', speed: '30秒/張', privacy: '需要登入', quality: '專業品質', price: '$39.99/月' },
    { name: 'HeicPro', speed: '0.3秒/張', privacy: '100%離線', quality: '無損原檔', price: '$2.99/月', highlight: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* 限時優惠橫幅 */}
      {/* <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
          <span className="animate-pulse">🔥</span>
          <span className="font-bold">黑五限時特惠！原價 $9.99 → 現在只要 $2.99/月</span>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
            <span className="text-sm">剩餘時間：</span>
            <span className="font-mono font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="animate-pulse">🔥</span>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            {/* 信任標籤 */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <span>🏆</span>
              <span>App Store 年度最佳工具 2024</span>
            </div>

            {/* 主標題 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 leading-tight">
              HEIC 照片打不開？
              <br />
              <span className="text-gray-900">3秒轉成 PNG/JPG</span>
            </h1>

            {/* 副標題 */}
            <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-semibold">
              攝影師每月省下 <span className="text-green-600 font-bold">40小時</span>・
              電商賣家銷量提升 <span className="text-green-600 font-bold">3倍</span>
            </p>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              專業 HEIC 轉 PNG/JPG 工具，完美保留照片品質，比線上工具快 10 倍
            </p>

            {/* 社會證明 */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
                <span className="font-bold text-gray-700">4.9/5.0</span>
                <span className="text-gray-500">(28,439 評價)</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="font-bold text-gray-700">2.3M+ 下載</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏅</span>
                <span className="font-bold text-gray-700">編輯推薦</span>
              </div>
            </div>

            {/* CTA 按鈕組 */}
            <div className="flex justify-center mb-8">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200">
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  省70%
                </span>
                <span className="flex items-center gap-2">
                  立即開始免費試用
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>

            {/* 無需信用卡提示 */}
            <p className="text-sm text-gray-500 mb-12">
              ✓ 無需信用卡 ✓ 隨時取消 ✓ 30天退款保證
            </p>

            {/* 產品預覽 */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm font-semibold ml-4">HeicPro - 轉換 28 張照片中...</span>
                </div>
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚡</div>
                      <div className="text-2xl font-bold text-gray-700 mb-2">拖放即轉，秒速完成</div>
                      <div className="text-gray-500">支援 HEIC → PNG / JPG 高品質轉換</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 痛點對齊 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">為什麼需要 HEIC 轉檔？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="text-red-500 text-xl mb-2">❌ 現況問題</div>
              <p className="text-gray-600 mb-4">HEIC 在 Windows 打不開</p>
              <div className="text-green-500 text-xl mb-2">✅ 我們的解法</div>
              <p className="font-semibold">快速轉成 JPG/PNG 格式</p>
            </div>
            <div className="flex flex-col">
              <div className="text-red-500 text-xl mb-2">❌ 現況問題</div>
              <p className="text-gray-600 mb-4">線上工具有隱私風險</p>
              <div className="text-green-500 text-xl mb-2">✅ 我們的解法</div>
              <p className="font-semibold">100% 離線處理，照片不離開手機</p>
            </div>
            <div className="flex flex-col">
              <div className="text-red-500 text-xl mb-2">❌ 現況問題</div>
              <p className="text-gray-600 mb-4">轉檔後失去拍攝資訊</p>
              <div className="text-green-500 text-xl mb-2">✅ 我們的解法</div>
              <p className="font-semibold">完整保留照片品質與資訊</p>
            </div>
          </div>
        </div>
      </section>

      {/* 數據證明區 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">{(todayCount.photos / 1000).toFixed(0)}K+</div>
              <div className="text-blue-100">今日轉檔照片數</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">0.3秒</div>
              <div className="text-blue-100">平均轉檔速度</div>
            </div>
            {/* <div>
              <div className="text-5xl font-black mb-2">$4,280</div>
              <div className="text-blue-100">平均每年節省</div>
            </div> */}
            <div>
              <div className="text-5xl font-black mb-2">99.9%</div>
              <div className="text-blue-100">用戶滿意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* 對比競品 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-4">為什麼專業人士都選擇 HeicPro？</h2>
          <p className="text-xl text-gray-600 text-center mb-12">實測數據說話，完勝所有競品</p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6">比較項目</th>
                  {competitors.map((comp, idx) => (
                    <th key={idx} className={`py-4 px-6 ${comp.highlight ? 'bg-gradient-to-b from-blue-50 to-white' : ''}`}>
                      <div className={comp.highlight ? 'text-blue-600 font-bold' : 'text-gray-600'}>
                        {comp.name}
                        {comp.highlight && <div className="text-xs text-orange-500 mt-1">⭐ 推薦</div>}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">轉檔速度</td>
                  {competitors.map((comp, idx) => (
                    <td key={idx} className={`py-4 px-6 text-center ${comp.highlight ? 'bg-blue-50 font-bold text-green-600' : ''}`}>
                      {comp.speed}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">隱私安全</td>
                  {competitors.map((comp, idx) => (
                    <td key={idx} className={`py-4 px-6 text-center ${comp.highlight ? 'bg-blue-50 font-bold text-green-600' : ''}`}>
                      {comp.privacy}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">輸出品質</td>
                  {competitors.map((comp, idx) => (
                    <td key={idx} className={`py-4 px-6 text-center ${comp.highlight ? 'bg-blue-50 font-bold text-green-600' : ''}`}>
                      {comp.quality}
                    </td>
                  ))}
                </tr>
                {/* <tr>
                  <td className="py-4 px-6 font-semibold">價格</td>
                  {competitors.map((comp, idx) => (
                    <td key={idx} className={`py-4 px-6 text-center ${comp.highlight ? 'bg-blue-50' : ''}`}>
                      <div className={comp.highlight ? 'font-bold' : ''}>
                        {comp.price}
                        {comp.highlight && (
                          <div className="text-xs text-red-500 line-through mt-1">原價 $9.99/月</div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr> */}
              </tbody>
            </table>
          </div>
          
          {/* <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
              <span>💰</span>
              <span>比 Adobe 便宜 93%，速度快 100 倍！</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* 功能展示 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              顛覆性功能
            </span>
            ，讓轉檔變成享受
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '🚀', 
                title: '極速轉檔', 
                desc: 'HEIC 秒轉 PNG/JPG',
                tag: 'HOT',
                color: 'from-orange-500 to-red-500'
              },
              { 
                icon: '🎨', 
                title: '無損品質', 
                desc: '100% 保留原始畫質',
                tag: 'PRO',
                color: 'from-green-500 to-teal-500'
              },
              { 
                icon: '📱', 
                title: '批次處理', 
                desc: '一次轉換多張照片',
                tag: 'NEW',
                color: 'from-blue-500 to-purple-500'
              },
              { 
                icon: '🔒', 
                title: '100% 離線', 
                desc: '照片不離開你的裝置',
                tag: null,
                color: null
              },
              { 
                icon: '💾', 
                title: '格式選擇', 
                desc: 'PNG 或 JPG 隨你選',
                tag: null,
                color: null
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {feature.tag && (
                  <span className={`absolute -top-3 -right-3 bg-gradient-to-r ${feature.color} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                    {feature.tag}
                  </span>
                )}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 真實見證 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12">月入百萬的創作者都在用</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl">
                  📸
                </div>
                <div>
                  <h3 className="font-bold text-xl">David Chen - 婚攝大師</h3>
                  <div className="text-yellow-300">★★★★★</div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                「每場婚禮拍的 HEIC 照片，客戶的 Windows 電腦都打不開。
                現在用 HeicPro 批次轉成 JPG，
                <span className="font-bold text-yellow-300">交件零問題，客戶滿意度大增！</span>」
              </p>
              <div className="text-sm opacity-80">5 星好評率：85% → 99%</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-2xl">
                  🛍️
                </div>
                <div>
                  <h3 className="font-bold text-xl">Emily Wang - 電商女王</h3>
                  <div className="text-yellow-300">★★★★★</div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                「iPhone 拍的產品照 HEIC 格式，上架平台都不支援。
                <span className="font-bold text-yellow-300">HeicPro 轉成 JPG 超快，上架效率提升 5 倍！</span>
                終於不用再開電腦處理了。」
              </p>
              <div className="text-sm opacity-80">每日上架數：20 件 → 100+ 件</div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold mb-4">
              已幫助 <span className="text-yellow-300">128,394</span> 位創作者提升收入
            </p>
            <p className="text-lg opacity-90">
              平均收入提升 <span className="text-3xl font-bold text-yellow-300">287%</span>
            </p>
          </div>
        </div>
      </section>

      {/* 價格方案 - 更商業化 */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-4">投資自己，立即回本</h2>
          <p className="text-xl text-gray-600 text-center mb-2">
            平均 <span className="font-bold text-green-600">3 天回本</span>，
            每年節省 <span className="font-bold text-green-600">${Math.round(savedAmount)}</span>
          </p>
          <p className="text-center text-orange-600 font-semibold mb-12 animate-pulse">
            ⏰ 黑五特惠剩餘 {timeLeft.hours} 小時 {timeLeft.minutes} 分鐘
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            基礎版
            <div className="relative bg-gray-50 rounded-3xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">基礎版</h3>
              <div className="text-4xl font-black mb-2">$0</div>
              <p className="text-gray-500 mb-6">適合輕度使用</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>每日 10 張免費額度</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>基本格式轉換</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>批次處理</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>自訂品質</span>
                </li>
              </ul>
              <button className="w-full py-4 border-2 border-gray-300 rounded-full font-bold hover:bg-gray-100 transition-colors">
                免費開始
              </button>
            </div>

            專業版 - 主推
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-4 border-blue-500 shadow-2xl transform scale-105">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                🔥 最划算・省70%
              </div>
              <h3 className="text-2xl font-bold mb-2">專業版</h3>
              <div className="mb-2">
                <span className="text-4xl font-black">$2.99</span>
                <span className="text-lg text-gray-600">/月</span>
              </div>
              <p className="text-sm text-red-500 line-through mb-2">原價 $9.99/月</p>
              <p className="text-green-600 font-semibold mb-6">每天只要 $0.09</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="font-semibold">無限轉檔</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="font-semibold">PNG & JPG 輸出</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="font-semibold">極速批次處理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="font-semibold">自訂輸出品質</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="font-semibold">優先技術支援</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                立即節省 70% →
              </button>
              <p className="text-center text-sm text-gray-600 mt-3">
                30 天退款保證
              </p>
            </div>

          </div>

          付款保證
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-600">256 位元加密</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span className="text-gray-600">安全支付</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">↩️</span>
              <span className="text-gray-600">30 天退款</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-gray-600">終身免費更新</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ - 更商業化 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12">購買前的疑慮，我們都懂</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <span className="text-3xl text-blue-600 flex-shrink-0">
                    {expandedFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最終 CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            別讓 HEIC 拖慢你的成功速度
          </h2>
          <p className="text-2xl mb-8 opacity-95">
            現在加入 <span className="font-bold text-yellow-300">128,394</span> 位聰明用戶
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-3xl font-bold mb-4">
              限時優惠即將結束
            </p>
            <div className="text-5xl font-black text-yellow-300 mb-4">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <p className="text-xl">
              錯過要再等一年！
            </p>
          </div>
          <button className="bg-white text-blue-600 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-3">
            <span>立即開始賺更多</span>
            <span className="text-3xl">→</span>
          </button>
          <p className="mt-6 opacity-80">
            加入後平均 3 天回本・30 天無條件退款
          </p>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-white font-bold text-xl mb-4">HeicPro</h3>
            <p className="text-sm">最簡單的 HEIC 轉 PNG/JPG 工具，專為 iPhone 用戶打造。</p>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm">© 2024 HeicPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}