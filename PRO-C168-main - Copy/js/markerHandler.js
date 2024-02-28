AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",() => {
            this.handleMarkerFound()
        })
        
        this.el.addEventListener("markerLost",() => {
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click",() => {
            swal({
                icon:"warning",
                title:"rate toy",
                text:"work in progress",
            })
        })  
        orderButton.addEventListener("click",() => {
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpeg",
                title:"thanks for ordering",
                text:"your order will arrive in 2-5 business days",
            })
        })


    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    },
})