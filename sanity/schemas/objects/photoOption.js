

export default {
    name: 'photoOption',
    title: 'Photo Option',
    type: 'object',

  
    fields: [
      {
        name: 'dimension',
        title: 'Dimension',
        type: 'string',
        description: 'Select dimension',
        options: {
          list: dimensions.map(x=> x.tallName),
          layout: 'radio'
        }
      },


      {
        title: 'Photo Option',
        name: 'photoOption',
        type: 'array',
        of: [{type: 'photoOption'}]
      },
    ],
  
    // 8. Define how the dayAndTime object will render in the Studio 
    preview: {
      select: {
 
        dimension: 'dimension',
        price: 'price',
        isTall:'isTall'
      },
      prepare({dimension, price, isTall}) {
        return {
         title: `${dimension} ${isTall ? '↕️' : '↔️'}`,
          isTall: isTall,
          subtitle: price
        }
      }
    }
  }