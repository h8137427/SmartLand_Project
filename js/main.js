/**
 * Smart Land Corporate Multimedia Website Script
 * Course: ITE_BMM601 + ISE_MM (F25) - Syrian Virtual University
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // 2. Portfolio Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Synchronized Video + Audio + Live Arabic Subtitles Engine
    const syncDefinitions = [
        {
            videoId: 'videoIntro',
            audioId: 'audioIntro',
            captionBoxId: 'captionIntro',
            cues: [
                { start: 0, end: 3, text: 'مرحباً بكم في شركة Smart Land - رائدة الاستشارات والحلول التقنية العالمية منذ عام 2011.' },
                { start: 3, end: 6, text: 'نعمل على دمج خوارزميات الذكاء الاصطناعي والرؤية الحاسوبية في صلب العمليات المؤسسية.' },
                { start: 6, end: 9, text: 'نطور منصات الويب والموبايل والأنظمة السحابية بأعلى معايير الأداء والأمن السيبراني.' },
                { start: 9, end: 12.5, text: 'أكثر من 15 عاماً من التميز والابتكار في بناء المستقبل الرقمي الذكي.' }
            ]
        },
        {
            videoId: 'videoProjects',
            audioId: 'audioProjects',
            captionBoxId: 'captionProjects',
            cues: [
                { start: 0, end: 3, text: 'تطبيق Smart Signal: ترجمة فورية للغة الإشارة إلى نص وصوت عبر الرؤية الحاسوبية.' },
                { start: 3, end: 6, text: 'منصة MyKey: السوق الرقمي المتكامل لبيع وتأجير العقارات والمركبات مع التقييم الذكي.' },
                { start: 6, end: 9, text: 'منصة Sada للتعلم عن بعد: فصول افتراضية تفاعلية ومسارات تعليمية متكيفة بالذكاء الاصطناعي.' },
                { start: 9, end: 12.5, text: 'تطبيق Welcome للتسوق متعدد المتاجر، وأنظمة Smart HMS المتكاملة لإدارة المشافي.' }
            ]
        }
    ];

    syncDefinitions.forEach(item => {
        const video = document.getElementById(item.videoId);
        const audio = document.getElementById(item.audioId);
        const captionBox = document.getElementById(item.captionBoxId);

        if (!video || !captionBox) return;
        const captionTextEl = captionBox.querySelector('.caption-text');

        video.addEventListener('play', () => {
            if (audio) {
                audio.currentTime = video.currentTime;
                audio.play().catch(() => {});
            }
        });

        video.addEventListener('pause', () => {
            if (audio) audio.pause();
        });

        video.addEventListener('seeking', () => {
            if (audio) audio.currentTime = video.currentTime;
        });

        video.addEventListener('volumechange', () => {
            if (audio) {
                audio.muted = video.muted;
                audio.volume = video.volume;
            }
        });

        video.addEventListener('timeupdate', () => {
            const current = video.currentTime;
            const activeCue = item.cues.find(c => current >= c.start && current < c.end);
            if (activeCue && captionTextEl) {
                captionTextEl.textContent = activeCue.text;
            }
        });
    });

    // 4. Interactive Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value.trim();
            formFeedback.style.color = '#10b981';
            formFeedback.textContent = `شكراً لك ${fullName}، تم استلام طلب الاستشارة بنجاح وسيتواصل معك فريق Smart Land قريباً.`;
            contactForm.reset();
        });
    }
});
