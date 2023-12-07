import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import Button from "components/Button";

import { Lesson25Wrapper, LoginForm, Text } from "./styles";

function Lesson25() {
  const shema = Yup.object().shape({
    email: Yup.string()
      .required("Поле email обязательное")
      .email("Неправильный формат email"),
    password: Yup.string()
      .min(3, "минимум 3 символа")
      .max(10, "максимум 10 символов")
      .required("Поле password обязательное"),
  });
  // создаем объект Formik, который включает в себя все необходимые функции и свойства для управления данными из формы
  const formik = useFormik({
    initialValues: {
      // вместо 2х юзстейтов
      email: "",
      password: "",
    },
    // Передаем объект shema
    validationSchema: shema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log("Submit works now");
      console.log(values);
      console.log(actions);
      actions.resetForm();
    },
  });

  console.log(formik);
  return (
    <Lesson25Wrapper>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Text>Login form</Text>
        <Input
          // передаем пропсу email компоненту Input
          error={formik.errors.email}
          name="email" // имя должно совпадать с именем в formik
          value={formik.values.email}
          onChange={formik.handleChange}
          labelName="Email"
          placeholder="Enter email"
        />
        <Input
          error={formik.errors.password}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          labelName="Password"
          placeholder="Enter Password"
        />
        <Button disabled={!formik.isValid || !formik.values.email || !formik.values.password} name="Login" type="submit" />
      </LoginForm>
    </Lesson25Wrapper>
  );
}

export default Lesson25;
