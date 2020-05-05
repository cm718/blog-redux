import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

export const PostList = () => {
  const [posts] = useState(['Test'])
  useEffect(() => {
    fetchPosts()
  })
  return <div>{posts}</div>
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { fetchPosts })(PostList)
