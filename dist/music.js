const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "心安理得",
        artist: '王天戈',
        url: 'https://m10.music.126.net/20181201185857/0b43d1d4b812f44fb8d5e6400283c04c/ymusic/36ca/c59e/b0b4/6f51d127ec13c3255b70a1b73f501d5f.mp3',
        cover: 'https://p1.music.126.net/Hrckg2IfeAV34N4UAZctRg==/109951163604902705.jpg',
      },
      {
        name: '当真',
        artist: '蒋家驹/曲肖冰',
        url: 'https://m10.music.126.net/20181201190053/8a212cc335003e26ada41edf737ba8bf/ymusic/563b/dce3/8584/d5e1e3aaa8bb30ae7f55b69bf383713d.mp3',
        cover: 'https://p1.music.126.net/DH24toQj5As0cKemKfAikw==/109951163511652133.jpg',
      },
      
    ]
});