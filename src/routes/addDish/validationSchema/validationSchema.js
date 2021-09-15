import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string()
        .required("Dish name is required")
        .max(30, 'Must be 30 charactes or less')
        .min(4, 'Must be at least 4 characters'),
    preparation_time: Yup.string()
        .matches(/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/g , 'Wrong format, please input as hh:mm:ss')
        .required('Preparation time is required'),
    no_of_slices: Yup.number().notRequired()
        .when('type', {
            is: (val) => val === "pizza",
                then: Yup.number()
                .required("Number of slices is required")
                .min(1, 'Must be at least 1 slice')
                .max(10, 'Must be 10 slices or less')
        })
        .when('type', {
            is: (val) => val !== "pizza",
            then: Yup.number().notRequired()
        }),
    diameter: Yup.number()
        .when('type', {
            is: (val) => val === "pizza",
                then: Yup.number()
                .required("Diameter is required")
                .min(15, "Must be at least 15cm in diameter")
                .max(50, 'Must be 50cm or less in diameter'),
        })
        .when('type', {
            is: (val) => val !== "pizza",
            then: Yup.number().notRequired()
        }),
    spiciness_scale: Yup.number()
        .when('type', {
            is: (val) => val === "soup",
                then: Yup.number()
                .required("Spiciness scale is required")
                .min(1, "Must be at least 1 in spiciness scale")
                .max(10, 'Must be 10 or less in spiciness scale'),
        })
        .when('type', {
            is: (val) => val !== "soup",
            then: Yup.number().notRequired()
        }),
    slices_of_bread: Yup.number()
        .when('type', {
            is: (val) => val === "sandwich",
                then: Yup.number()
                .required("Slice of bread is required")
                .min(1, "Must be at least 1 slice of bread")
                .max(12, 'Must be 12 or less slices of bread'),
        })
        .when('type', {
            is: (val) => val !== "sandwich",
            then: Yup.number().notRequired()
        })
})