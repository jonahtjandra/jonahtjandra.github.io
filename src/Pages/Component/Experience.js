import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: 'sig.jpg',
    header: 'Susquehanna International Group (SIG)',
    description: 'Incoming Technology Intern: Market Data Team',
    meta: 'Software Engineer',
    extra: 'June - August 2022',
  },
  {
    childKey: 1,
    image: 'uiuc.jpg',
    header: 'University of Illinois Urbana Champaign',
    description: 'Developed and designed a Gradebook System for 300+ students to track their grades. Technical Project Manager in charge of architecting and designing web development features to be implemente to website. Rapidly develop in an agile workflow using technologies and frameworks such as Angular JS, OAuth, SQL, and Flask. Designed and wrote deployment scripts.',
    meta: 'Web-Infra Lead',
    extra: 'Jan 2022 - Present',
  },
  {
    childKey: 1,
    image: 'grainger.jpg',
    header: 'Code Certain AI',
    description: 'Constructed an active learning algorithm using sci-kit learn API that reduces training set of model by 27% while achieving the same performance. Implemented NLP models: Word2Vec, BOW, and TF- IDF on 12000 data points of code repositories. Feature engineering using one hot encoding and encoding cyclical time data.',
    meta: 'Software Engineer (Machine Learning)',
    extra: 'June - August 2021',
  }
]

const ItemExampleProps = () => <Item.Group items={items} />

export default ItemExampleProps