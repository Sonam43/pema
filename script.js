const header = document.getElementById('header');
        const images = [
            'image/maxresdefault.jpg',
            'image/change.jpg',
            'image/445595281_871475631659555_139784509806039452_n.jpg'
            
        ];
        let currentIndex = 0;

        function changeBackgroundImage() {
            header.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }

        setInterval(changeBackgroundImage, 3000);
        changeBackgroundImage();

        function toggleMenu() {
            const menu = document.getElementById('responsiveMenu');
            if (menu.style.right === '0px') {
                menu.style.right = '-300px';
            } else {
                menu.style.right = '0px';
            }
        }

        function toggleContent(type) {
            var visionContent = document.getElementById('vision-content');
            var missionContent = document.getElementById('mission-content');
            var visionButton = document.querySelector('.btn.vision');
            var missionButton = document.querySelector('.btn.mission');
            
            if (type === 'vision') {
                visionContent.style.display = 'block';
                missionContent.style.display = 'none';
                visionButton.style.backgroundColor = '#0044ff';
                visionButton.style.color = '#ffffff';
                missionButton.style.backgroundColor = '#ffffff';
                missionButton.style.color = '#0044ff';
            } else {
                visionContent.style.display = 'none';
                missionContent.style.display = 'block';
                missionButton.style.backgroundColor = '#0044ff';
                missionButton.style.color = '#ffffff';
                visionButton.style.backgroundColor = '#ffffff';
                visionButton.style.color = '#0044ff';
            }
        }