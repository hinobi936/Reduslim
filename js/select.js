
var ddData = [
    {
        text: "RU",
        value: 1,
        selected: true,
        imageSrc: "/img/rus.jpg"
    },
    {
        text: "UA",
        value: 2,
        selected: false,
        imageSrc: "/img/usa.jpg"
    },
    {
        text: "KZ",
        value: 3,
        selected: true,
        imageSrc: "/img/kaz.jpg"
    },
    {
        text: "UK",
        value: 4,
        selected: false,
        imageSrc: "/img/ukr.jpg"
    }
];

$('#myDropdown').ddslick({
    data:ddData,
    width: 100,
    imagePosition:"right",
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});