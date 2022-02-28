const vueSlider = new Vue (
    {
        el: "#carousel-wrapper",
        data: {
            slides : [
            {
                photo: 'img/01.jpg',
                country: 'Svezia',
                caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                active: false
            }, 
            {
                photo: 'img/02.jpg',
                country: 'Svizzera',
                caption: 'Lorem ipsum',
                active: false
            },
            {
                photo: 'img/03.jpg',
                country: 'Gran Bretagna',
                caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                active: true
            },
            {
                photo: 'img/04.jpg',
                country: 'Germania',
                caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                active: false
            }, 
            {
                photo: 'img/05.jpg',
                country: 'Paradise',
                caption: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                active: false
            }],
            idList: "img-wrapper miniatures up down arrows",
            classList: "img-lg info title caption lil-img active active-xs",
            currentSlide: 2,
        },
        methods: {
            // showImg: function() {
            //     if (active === true)

            // }
            goUp: function() {
                // console.log("hai cliccato freccia su");
                
                if (this.currentSlide === 0)
                {
                    this.currentSlide = (this.slides.length - 1);
                    // console.log(this.slides.length);
                    // console.log(this.currentSlide);
                }
                else
                {
                    this.currentSlide--;
                    // console.log(this.currentSlide);
                }
            },

            goDown: function() {
                if (this.currentSlide === (this.slides.length - 1))
                    this.currentSlide = 0;
                else
                    this.currentSlide++;
            },

            goTo: function(i) {
                this.currentSlide = i;
            }
        }
    })

