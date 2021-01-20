
import ItemPrice from '../components/ItemPrice';


export default {
    name: 'option',
    title: 'Option',
    type: 'document',
    fields: [
        {
          title: 'Option Name',
          name: 'name',
          type: 'string',
          },
   
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 100,
          },
        },
        {
          title: 'Dimension',
          name: 'dimension',
          type: 'array',
          of: [{type: 'reference', to:[{type: 'dimension'}]}]
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price in USD',
            validation: (Rule) => Rule.min(1000).max(50000),
            inputComponent: ItemPrice,
          },
        
    ],
}