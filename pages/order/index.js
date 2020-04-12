import Layout from '../../components/Layout';
import { Formik, Form, Field } from 'formik';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Grid,
  makeStyles,
} from '@material-ui/core';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lastname is Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textfield: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  field: {
    width: '100%',
  },
}));

const PlaceOrder = () => {
  const classes = useStyles();

  return (
    <Layout>
      <h1>Just a few more details about you...</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={classes.root}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Field
                    name="firstName"
                    label="First Name"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="organization"
                    label="Organization"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="streetAddress"
                    label="Street Address"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="city"
                    label="City"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="state"
                    label="State"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="country"
                    label="Country"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="phonenumber"
                    label="Phone Number"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    label="Email"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="question1"
                    label="Question 1"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="notes"
                    label="Notes"
                    component={TextField}
                    className={classes.field}
                  />
                </Grid>
              </Grid>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default PlaceOrder;
