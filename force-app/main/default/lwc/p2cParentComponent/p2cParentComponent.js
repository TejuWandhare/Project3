import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
  carousalData=[ //carousalData is a property. In that we create array of object where src is key and url is value
    {
        src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header: "First Card",
        description: "First card description "

    },
    {
        src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header: "Second Card",
        description: "Second card description "

    },
    {
        src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header: "Third Card",
        description: "Third card description "

    }

  ]
  
}