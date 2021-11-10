import React, { Component } from "react";

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  render() {
    return (     
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>                    
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {this.state.users.map((user, index) => (                    
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" 
                                 src={user.picture.thumbnail} 
                                 alt={`${user.name.first} ${user.name.last}`} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {`${user.name.first} ${user.name.last}`}
                            </div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {`${user.location.city}, ${user.location.country}`}
                        </div>
                        <div className="text-sm text-gray-500">
                          {`${user.location.street.number} ${user.location.street.name}`}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/#" 
                           className="text-indigo-600 hover:text-indigo-900" 
                           onClick={(e) => {this.deleteUser(user, index, e)}}>
                          Delete
                        </a>
                      </td>
                    </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>            
    )
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => this.setState({users: data.results}))
  }

  deleteUser = (user, index, e) => {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/users/${user.id}`,{method:"DELETE"})
      .then(res => res.json())
      .then(json => console.log(json))
    this.setState({ users: this.state.users.filter((item, i) => i !== index) })
  }
}