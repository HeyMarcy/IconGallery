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
    name: 'photoSizeEdition',
    title: 'Photo SizeEdition',
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
        name: 'price',
        title: 'Price',
        type: 'number',
        inputComponent: PriceInput
      },
      {
        name: 'edition',
        title: 'Edition',
        type: 'number',
      }
    ],
  
    preview: {
      select: {
 
        dimension: 'dimension',
        edition: 'edition',
        price: 'price',

      },
      prepare({dimension, price}) {
        return {
         title: dimension,
          subtitle: `${price} - Limited to ${edition}`,
          
        }
      }
    }
  }