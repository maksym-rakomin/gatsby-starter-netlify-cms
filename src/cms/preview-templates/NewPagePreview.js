import React from 'react'
import PropTypes from 'prop-types'
import { NewPageTemplate } from '../../templates/new-page'

const NewPagePreview = ({ entry, widgetFor }) => (
    <NewPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
)

NewPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewPagePreview
