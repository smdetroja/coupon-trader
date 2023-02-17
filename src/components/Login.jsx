import { Navbar } from "./Navbar";
import { useForm } from "@mantine/form";
import { PasswordInput, Box, TextInput, Button, Group, Grid, Space, Image } from "@mantine/core";

export function Login() {
  const form = useForm({
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => 
        value.password == null ? "Enter Password" : null,
    },
  });

  return (
    <div>
      <Navbar fluid />
      <Space h="xl" />
      <Space h="xl" />
      <center>
        <h1 className="Heading">Log In your Profile</h1>
      </center>
      <Space h="xl" />
      <Grid grow gutter="xs">
        <Grid.Col>
          <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              alt="Login Image"
            />
          </div>
        </Grid.Col>
        <Space h="xl" />
        <Grid.Col>
          <Box sx={{ maxWidth: 340 }} mx="auto">
            <form onSubmit={form.onSubmit(console.log)}>
              <TextInput
                mt="sm"
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps("password")}
              />
              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
    </div>
  );
}
