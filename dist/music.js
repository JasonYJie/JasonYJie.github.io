const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '年少有为',
        artist: '李荣浩',
        url: 'http://www.ytmp3.cn/down/50491.mp3',
        cover: 'http://p1.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
      },
	  {
        name: 'Way Back',
        artist: 'Vicetone / Cozi Zuehlsdorff',
        url: 'http://www.ytmp3.cn/down/58708.mp3',
        cover: 'http://p1.music.126.net/sOfRLrOCx-THntvvnlimCg==/109951163311532318.jpg',
      }      
    ]
});