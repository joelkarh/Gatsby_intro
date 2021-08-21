import * as React from 'react';
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const blog = ({data}) => {
    return (
        <Layout pageTitle='My Blog Posts'>
             <p>My cool posts will go in here</p>
             <ul>
                 {data.allFile.nodes.map((el)=>(
                     <li key={el.name}>
                         {el.name}
                     </li>
                 ))}
             </ul>
        </Layout>
    )
}
export const query = graphql`
query MyQuery {
    allFile {
    nodes {
        name
    }
    }
}
`  

export default blog
