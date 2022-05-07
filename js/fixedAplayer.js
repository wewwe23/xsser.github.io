/*
 * @Author: your name
 * @Date: 2022-04-23 00:41:23
 * @LastEditTime: 2022-05-07 18:22:31
 * @LastEditors: wewwe23 2016925686@qq.com
 * @Description: 鎵撳紑koroFileHeader鏌ョ湅閰嶇疆 杩涜璁剧疆: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \undefinedd:\hexo\themes\next\source\js\fixedAplayer.js
 */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.6,
    mutex: true,
    loop: "all",
    order: "list",
    listFolded: false,
    theme: "#ee8243",
    audio: [
        {
            name: 'The Way I Still Love You',
            artist: 'Reynard Silva',
            url: 'https://music.163.com/song/media/outer/url?id=28718313.mp3',
            cover: 'https://p2.music.126.net/JyPsd_g00M-4mqXLLtHncw==/5984641790343690.jpg?',
        },
        {
            name: 'Release My Soul',
            artist: 'Aimee Blackschleger',
            url: 'https://music.163.com/song/media/outer/url?id=498134.mp3',
            cover: 'https://p2.music.126.net/JbyZBW6Th0hbW8RsRXWVdA==/109951166197895701.jpg?',
        },
        {
            name: 'My Dearest',
            artist: 'supercell',
            url: 'https://music.163.com/song/media/outer/url?id=825343.mp3',
            cover: 'https://p2.music.126.net/u78AmmcaZCO3sKbafA_Gpw==/109951166200230737.jpg?',
        },
        {
            name: 'Departures ~銇傘仾銇熴伀銇娿亸銈嬨偄銈ゃ伄姝寏',
            artist: 'EGOIST',
            url: 'https://music.163.com/song/media/outer/url?id=31649312.mp3',
            cover: 'https://p1.music.126.net/6_U3BqyOyORzgT-Pk8EaJA==/7823025232375393.jpg?',
        },
        {
            name: 'That Girl',
            artist: 'Olly Murs',
            url: 'https://music.163.com/song/media/outer/url?id=440208476.mp3',
            cover: 'https://p2.music.126.net/20i3iOypDSK_4hEKmYj2mg==/109951165975751486.jpg??',
        },
        {
            name: 'You Are Not Alone',
            artist: 'Michael Jackson',
            url: 'https://music.163.com/song/media/outer/url?id=1697653.mp3',
            cover: 'https://p2.music.126.net/4fK_UU_c6IHbq7wrAW4Qow==/18715886929967779.jpg?',
        },
        {
            name: 'Bird',
            artist: '鏉句笅鍎篃',
            url: 'https://music.163.com/song/media/outer/url?id=471048.mp3',
            cover: 'https://p2.music.126.net/5zUWgVhy2JOCVhG-7tdfnw==/826832744130708.jpg?',
        },
        {
            name: 'Long Long ago, 20th Century',
            artist: '鍧備簳绱€闆�',
            url: 'https://music.163.com/song/media/outer/url?id=26137030.mp3',
            cover: 'https://p2.music.126.net/owiCkbm4sr7qoZLmvDlcjw==/2368348046254622.jpg?',
        },
        {
            name: '瑾般亱銇屽悰銈掓剾銇椼仸銈�',
            artist: '瀹唴銈裤偒銉︺偔',
            url: 'https://music.163.com/song/media/outer/url?id=444058093.mp3',
            cover: 'https://p2.music.126.net/Fh4zOJzFuWX-5D8MSewLsw==/18649916232054767.jpg?',
        },
        {
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://music.163.com/song/media/outer/url?id=32358691.mp3',
            cover: 'https://p2.music.126.net/2p5umLN0LK5rE2-6gye1Kw==/109951166863906891.jpg?',
        },
        {
            name: 'LAST STARDUST',
            artist: 'Aimer',
            url: 'https://music.163.com/song/media/outer/url?id=33418857.mp3',
            cover: 'https://p1.music.126.net/-NpYyW2ejTr7kcb-BxwsSg==/109951166919049170.jpg?',
        },
        {
            name: '鏄ャ伅銈嗐亸',
            artist: 'Aimer',
            url: 'https://music.163.com/song/media/outer/url?id=1429420739.mp3',
            cover: 'https://p2.music.126.net/vlJf7FKeMb5xGOHbqG043A==/109951166202230986.jpg?',
        },
        {
            name: "IT'S THE RIGHT TIME",
            artist: '涓夋郸澶х煡',
            url: 'https://music.163.com/song/media/outer/url?id=29771724.mp3',
            cover: 'https://p1.music.126.net/02yNM7DjINUIaOLT6v8AoA==/18499283139143651.jpg?',
        },
        {
            name: 'unravel',
            artist: 'TK from 鍑涖仺銇椼仸鏅傞洦',
            url: 'https://music.163.com/song/media/outer/url?id=29017078.mp3',
            cover: 'https://p2.music.126.net/9dRhDO4gjN0_KgTjPafIrw==/109951163316078250.jpg?',
        },
        {
            name: 'CHANGE THE WORLD',
            artist: 'V6 (銉栥偆銈枫儍銈偣)',
            url: 'https://link.hhtjim.com/qq/000JhJz90IfDwC.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000zNvQU1Ju73A_1.jpg?',
        }
    ]
});
