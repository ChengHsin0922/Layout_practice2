window.onload = function () {
    console.log('ok');
    AOS.init();
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.card-a', {
        y: 200,
        opacity: 0
    },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.Out',
            scrollTrigger: {
                trigger: '.card-a',
                toggleActions: 'play none none reverse',
                start: 'top bottom',
                end: 'top 70%',
            }
        }
    );
    gsap.fromTo('.card-b', {
        y: 280,
        opacity: 0
    },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.Out',
            scrollTrigger: {
                trigger: '.card-b',
                toggleActions: 'play none none reverse',
                start: 'top bottom',
                end: 'top 65%',
            }
        }
    );
    gsap.fromTo('.card-c', {
        y: 330,
        opacity: 0
    },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.Out',
            scrollTrigger: {
                trigger: '.card-c',
                toggleActions: 'play none none reverse',
                start: 'top bottom',
                end: 'top 60%',
            }
        }
    );

    gsap.from('.fade', {
        y: 200,
        opacity: 0,
        duration: 1.5
    })

    // 漸層顏色
    gsap.to('.animate-gradient', {
        backgroundPosition: "300% 0%",
        duration: 8,
        ease: "none",
        repeat: -1
    });

    // timeline
        gsap.timeline({
            scrollTrigger: {
                trigger: '.reservation',
                toggleActions: 'play none none reverse',
                start: 'top 70%',
            },
        }).fromTo('#step-title', {
            yPercent: 100,
            opacity: 0,
        },
            {
                yPercent: 0,
                opacity: 1,
                duration: 1
            }
        ).fromTo('#step-1', {
            xPercent: 100,
            opacity: 0
        },
            {
                xPercent: 0,
                opacity: 1,
            }
        ).fromTo('#step-2', {
            xPercent: 100,
            opacity: 0
        },
            {
                xPercent: 0,
                opacity: 1
            }
        ).fromTo('#step-3', {
            xPercent: 100,
            opacity: 0
        },
            {
                xPercent: 0,
                opacity: 1
            }
        ).fromTo('#step-4', {
            xPercent: 100,
            opacity: 0
        },
            {
                xPercent: 0,
                opacity: 1
            }
        );

        gsap.timeline({
            scrollTrigger: {
                trigger: '.course',
                toggleActions: 'play none none reverse',
                start: 'top 90%',
                end: '+=200'
            },
        })
        .fromTo('.course', {
            yPercent: 100,
            opacity: 0
        },
            {
                yPercent: 0,
                opacity: 1,
            }
        )
        .fromTo('.course-splide', {
            yPercent: 150,
            opacity: 0
        },
            {
                yPercent: 0,
                opacity: 1
            }
        );

    // Splide 輪播圖
    new Splide("#splide_1").mount();
    new Splide("#splide_2").mount();
    new Splide("#splide_3").mount();
}
