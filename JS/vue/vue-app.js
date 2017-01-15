'use strict';


(function(){

    const animation = {templateUrl: 'views/vue-app-views/animation.html'};
    const images = {template: '<div>imgages</div>'};
    const docs = {template: '<div>docs</div>'};
    const stars = {template: '<div>stars</div>'};
    const profile = {template: '<div>profile</div>'};

    var routes = [
        {
            path: '/animation', 
            component: animation
        },
        {
            path: '/images', 
            component: images
        },
        {
            path: '/docs', 
            component: docs
        },
        {
            path: '/stars', 
            component: stars
        },
        {
            path: '/profile', 
            component: profile
        },
    ];

    var router = new VueRouter({
        routes
    });

    var app_router = new Vue({
        router
    }).$mount('#container');

    var title = new Vue({
        el: '#title',
        data: {
            message: 'Hello Vue!',
            introduce: '---用法介绍'
        }
    });

    var body = new Vue({
        el: '#animation-body',
        data: {
            value: 'action',
            curtainUponStatus: false,
            showStatus: false,
            animationStatus: false,
            contentShowStatus: false,
            goUpStatus: false
        },
        methods: {
            AnimationClick: function(){
                window.setTimeout(function(){
                    this.showStatus = true;
                }.bind(this),300);
                window.setTimeout(function(){
                    this.goUpStatus = true;
                    this.animationStatus = false;
                    this.contentShowStatus = true;
                }.bind(this),3000);
                if(!this.curtainUponStatus && !this.animationStatus){
                    this.curtainUponStatus = true;
                    this.animationStatus = true;
                }
                else{
                    this.curtainUponStatus = false;
                    this.showStatus = false;
                    this.contentShowStatus = false;
                }
            }
        }
    });


})();
    