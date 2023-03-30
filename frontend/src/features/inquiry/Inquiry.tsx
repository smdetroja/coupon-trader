import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  createStyles,
  rem,
  Container,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { Comment } from './Comment'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 540,
    marginTop: rem(100),
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}))

export function Inquiry() {
  const form = useForm({
    initialValues: {
      name: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
    },
  })
  const { classes } = useStyles()

  return (
    <>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        })}
        weight={900}
        align="center"
      >
        Inquiry Here
      </Title>
      <SimpleGrid cols={2}>
        <Container className={classes.wrapper} style={{ minWidth: 470 }}>
          <form onSubmit={form.onSubmit(() => {})}>
            <TextInput
              label="Name Of Required Coupon"
              placeholder="Name"
              name="name"
              variant="filled"
              {...form.getInputProps('name')}
            />

            <Textarea
              mt="md"
              label="Description"
              placeholder="Details Of Coupon"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps('message')}
            />

            <Group position="center" mt="xl">
              <Button type="submit" size="md">
                Send message
              </Button>
            </Group>
          </form>
        </Container>
        <Container className={classes.wrapper}>
          <Comment
            body={
              'Combines two styles such that style2 will override any styles in style1. If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks.'
            }
            author={{
              name: 'Paytm',
              image: '',
            }}
          />
        </Container>
      </SimpleGrid>
    </>
  )
}