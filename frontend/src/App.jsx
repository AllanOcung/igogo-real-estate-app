import axios from 'axios'
import React from 'react'


class App extends React.Component {

  state = { details: [], };

  componentDidMount() {
    let data;
    axios.get('http://localhost:8000/properties/')
      .then(res => {
        data = res.data
        this.setState({ details: data });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>List of Real Estate Listings</h1>
        <div>
          {this.state.details.map(detail => (
            <div key={detail.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              <div>
              <h2>{detail.title}</h2>
              <p>{detail.description}</p>
              <p>{detail.location}</p>
              <p>{detail.price}</p>
              <p>{detail.property_type}</p>
              <p>{detail.status}</p>
              <p>{detail.image}</p>
              {detail.image_url ? (
                <img src={detail.image_url} alt={detail.title} style={{ width: '300px', height: '200px'}} />
              ) : (
                <p>No Image Available</p>
              )}
              <p>{detail.date_added}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
