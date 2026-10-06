上傳到 GitHub Pages 的步驟
1. 在 github.com 建立新的公開儲存庫（repository），例如 zhushan-box。
2. 點「Add file > Upload files」，把本資料夾內所有檔案與 images 資料夾拖進去，按 Commit。
3. 到儲存庫的 Settings > Pages，Source 選「Deploy from a branch」，Branch 選 main、資料夾選 / (root)，儲存。
4. 等 1～2 分鐘，網址會是 https://您的帳號.github.io/儲存庫名稱/
5. 用該網址開啟 qr.html，列印各品項 QR code 貼在餐盒上。
之後要換圖：把新照片放進 images 資料夾（檔名 scone.jpg、dessert.jpg），重新上傳即可。

安裝成App（PWA）
上線後用手機開啟網站：
- iPhone：Safari 點「分享」，選「加入主畫面」。
- Android：Chrome 選單中點「安裝應用程式」或「加到主畫面」。
安裝後可像App一樣從主畫面開啟，看過的頁面沒有網路（如高山訊號差）也能瀏覽。
若之後更新網站內容，請把 sw.js 第一行的 zhushan-v1 改成 zhushan-v2 等新版本名稱，手機才會更新。
