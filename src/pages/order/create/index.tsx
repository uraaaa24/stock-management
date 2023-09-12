import ProductNameForm from '@/components/organisms/productForms/productNameForm'
import SelectProductKindForm from '@/components/organisms/productForms/selectProductKindForm'
import { getDefaultLayout } from '@/components/templates/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { Button, Grid, Paper, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

const Create: NextPageWithLayout = () => {
    const methods = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <Paper elevation={4} sx={{ maxWidth: 800, mx: 'auto', my: 6 }}>
                <Grid
                    container
                    component={'form'}
                    rowSpacing={4}
                    onSubmit={methods.handleSubmit(onSubmit)}
                    sx={{ justifyContent: 'space-between', my: 0, mx: 'auto', width: 400 }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4">新規発注登録</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <ProductNameForm name="productName" />
                    </Grid>

                    <Grid item xs={12}>
                        <SelectProductKindForm name="productKind" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="outlined" size="large" sx={{ width: 200 }}>
                            発注登録
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </FormProvider>
    )
}

Create.getLayout = getDefaultLayout

export default Create
