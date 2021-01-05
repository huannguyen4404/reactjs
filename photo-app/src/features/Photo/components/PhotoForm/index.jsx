import InputField from 'components/custom-fields/InputField'
import RandomPhotoField from 'components/custom-fields/RandomPhotoField'
import SelectField from 'components/custom-fields/SelectField'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { FastField, Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, FormGroup } from 'reactstrap'

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log('Submit:', values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps
        console.log({ values, errors, touched })

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  )
}

export default PhotoForm
