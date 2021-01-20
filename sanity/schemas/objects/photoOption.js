import PriceInput from '../../components/PriceInput'

const dimensions = [
    {
        tallName: '11 x 14',
        wideName: '14 x 11',
        shortSide: 11,
        longSide: 14
    },
    {
        tallName: '16 x 20',
        wideName: '20 x 16',
        shortSide: 16,
        longSide: 20
    },
    {
        tallName: '20 x 24',
        wideName: '24 x 20',
        shortSide: 20,
        longSide: 24
    },
    {
        tallName: '20 x 30',
        wideName: '30 x 20',
        shortSide: 20,
        longSide: 30
    },
    {
        tallName: '30 x 40',
        wideName: '40 x 30',
        shortSide: 30,
        longSide: 40
    },
]


export default {
    name: 'photoOption',
    title: 'Photo Option',
    type: 'object',
  
    // const getDimensions = () => {
    //     const list = dimensions.map(x=> x)
    //     return
    // }

    // validation: Rule => Rule.custom(verifyInput),
  
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
        title: 'Aspect ratio is tall?',
        name: 'isTall',
        type: 'boolean'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        inputComponent: PriceInput
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