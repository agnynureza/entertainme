import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

class Content extends Component {
  render() { 
    return (  
      <div>
        <Query
          query={gql`
          {
            movies{
              _id
              title
              overview
              popularity
            }
          }`}> 
          {({loading,error,data})=> {
            console.log(data)
            if(loading) return <p> loading.... </p>
            if(error) return <p> Error... </p>
            return data.movies.map(({_id,title,overview,popularity})=>(
              <div key={_id}>
                <p> {title} </p>
                <p> {overview} </p>
                <p> {popularity} </p>
              </div>   
            ))   
          }}
        </Query>
      </div>
    )
  }
}
 
export default Content ;