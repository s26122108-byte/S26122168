document.addEventListener('DOMContentLoaded', () => {
    // 定義選項資料庫（包含名稱、圖片網址、Google Maps 搜尋連結）
    const foodList = [
        {
            name: "八方雲集",
            image: "https://i.postimg.cc/vZsXTfpm/ba-fang-yun-ji.webp",
            mapQuery: "八方雲集-高雄大社店"
        },
        {
            name: "THE T cafe",
            image: "https://i.postimg.cc/bv6RmMdH/THE-T-cafe.webp",
            mapQuery: "THE T café 樹德科大店 / TKS FULL HOUSE series"
        },
        {
            name: "筱喻早餐",
            image: "https://i.postimg.cc/bYSRRmPY/xiao-yu-zao-can.webp",
            mapQuery: "筱喻早餐"
        },
        {
            name: "翔美",
            image: "https://i.postimg.cc/SNW7BjJs/xiang-mei.webp",
            mapQuery: "翔美811台灣高雄市楠梓區區東路15號"
        },
        {
            name: "紹興炒飯",
            image: "https://i.postimg.cc/52bqb1Cm/shao-xing-chao-fan.jpg",
            mapQuery: "紹興炒飯815台灣高雄市大社區神農里中山路462之9號"
        }
    ];

    // 取得網頁上的 HTML 元素
    const drawBtn = document.getElementById('draw-btn');
    const title = document.getElementById('title');
    const foodCard = document.getElementById('food-card');
    const foodImg = document.getElementById('food-img');
    const mapBtn = document.getElementById('map-btn');

    // 監聽按鈕點擊事件
    drawBtn.addEventListener('click', () => {
        // 1. 隨機挑選一個食物物件
        const randomIndex = Math.floor(Math.random() * foodList.length);
        const selectedFood = foodList[randomIndex];

        // 2. 更新標題文字
        title.textContent = `${selectedFood.name}！`;

        // 3. 設定照片與 Google Maps 連結
        foodImg.src = selectedFood.image;
        mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedFood.mapQuery)}`;

        // 4. 顯示原本隱藏的圖片與「馬上出發」按鈕
        foodCard.classList.remove('hidden');
        mapBtn.classList.remove('hidden');

        // 5. 加上生動的彈跳動畫效果（先移除再加入，確保每次點擊都有動畫）
        title.classList.remove('bounce-animation');
        foodCard.classList.remove('bounce-animation');
        
        // 強制觸發瀏覽器重新重繪 (reflow)
        void title.offsetWidth;

        title.classList.add('bounce-animation');
        foodCard.classList.add('bounce-animation');
    });
});
