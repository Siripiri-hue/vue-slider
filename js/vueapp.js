const slider = new Vue (
    {
        el: ".section",
        data: {
            slides = [
            {
                photo: 'img/01.jpg',
                country: 'Svezia',
                caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            }, 
            {
                photo: 'img/02.jpg',
                country: 'Svizzera',
                caption: 'Lorem ipsum'
            },
            {
                photo: 'img/03.jpg',
                country: 'Gran Bretagna',
                caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                photo: 'img/04.jpg',
                country: 'Germania',
                caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }, 
            {
                photo: 'img/05.jpg',
                country: 'Paradise',
                caption: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }],
            idList: "img-wrapper miniatures up down"
        }
    })