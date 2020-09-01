import Layout from "../components/Layout";

const CreateAccount = () => {
  return (
    <>
      <Layout>
        <h1>CreateAccount</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <input type="submit" value="Create an Account" />
        </form>
      </Layout>
    </>
  );
};

export default CreateAccount;
