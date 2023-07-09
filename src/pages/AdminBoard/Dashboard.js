import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import "./Dashboard.css";

function AdminDashboard() {
  const [isAdmin, setISAdmin] = useState(false);

  // State for list of users
  const [allUsers, setAllUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [tournaments, setTournaments] = useState([]);

  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [orders, setOrders] = useState([]);

  const [leagues, setLeagues] = useState([]);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      setIsFetching(true);
      const admin = async () => {
        await axios.get("/users/me").then((res) => {
          console.log(res.data);
          if (res.data?.data.role == "admin") {
            setISAdmin(true);
            setIsFetching(false);
          }
        });
      };
      const fetchAllUsers = async () => {
        await axios.get("/users").then((res) => {
          console.log(res);
          setAllUsers(res.data?.data);
        });
      };

      const allTournaments = async () => {
        await axios.get("/tournaments").then((res) => {
          console.log(res.data?.data);
          setTournaments(res.data?.data);
        });
      };

      const fetchProducts = async () => {
        await axios.get("/products").then((res) => {
          setProducts(res.data?.data);
        });
      };

      const getLeagueInfo = async () => {
        await axios.get("/leagues").then((res) => {
          setLeagues(res.data?.data.leagues);
        });
      };

      const blogs = async () => {
        await axios.get("/blogs").then((res) => {
          console.log(res.data?.data);
          setBlogs(res.data?.data);
        });
      };

      const orders = async () => {
        await axios.get("/orders").then((res) => {
          console.log(res.data?.data);
          setOrders(res.data?.data);
        });
      };

      const messages = async () => {
        await axios.get("/contacts").then((res) => {
          console.log(res.data?.data);
          setMessages(res.data?.data);
        });
      };

      admin();
      fetchAllUsers();
      allTournaments();
      fetchProducts();
      getLeagueInfo();
      blogs();
      orders();
      messages();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteUser = async (userId) => {
    try {
      setIsFetching(true);
      console.log(userId);
      axios.delete(`/users/${userId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (blogId) => {
    try {
      setIsFetching(true);

      axios.delete(`/blogs/${blogId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete tournament
  const deleteTournament = (tournamentId) => {
    try {
      setIsFetching(true);
      axios.delete(`/tournaments/${tournamentId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete product
  const deleteProduct = (productId) => {
    try {
      setIsFetching(true);
      axios.delete(`/products/${productId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete league
  const deleteLeague = (leagueId) => {
    try {
      setIsFetching(true);
      axios.delete(`/leagues/${leagueId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete message
  const deleteMessage = (leagueId) => {
    try {
      setIsFetching(true);
      axios.delete(`/contacts/${leagueId}`).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-dashboard">
      {isFetching ? (
        <div>
          <h3 style={{ color: "white" }}>Loading...</h3>
        </div>
      ) : (
        isAdmin && (
          <>
            <h1>Admin Dashboard</h1>

            {/* Users */}
            <h2>Users</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <a href={`/view-user/${user._id}`}>{user.name}</a>
                    </td>
                    <td>
                      <a href={`/view-user/${user._id}`}>{user.email}</a>
                    </td>
                    <td>
                      {/* <button onClick={() => editUser(user)}>Edit</button> */}
                      <button onClick={() => deleteUser(user._id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Tournaments */}
            <h2>Tournaments</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tournaments.map((tournament, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <a href={`/tournament/${tournament._id}`}>
                        {tournament.name}
                      </a>
                    </td>
                    <td>
                      <a href={`/tournament/${tournament._id}`}>
                        {tournament.startDate}
                      </a>
                    </td>
                    <td>
                      <button>
                        <a href={`/edit-tournament/${tournament._id}`}>Edit</a>
                      </button>
                      <button onClick={() => deleteTournament(tournament.id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Products */}
            <h2>Products</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <button>
                        <a href={`/editproducts/${product._id}`}>Edit</a>
                      </button>
                      <button onClick={() => deleteProduct(product._id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Blogs */}
            <h2>Blogs</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td>{index + 1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>
                      <button>
                        <a href={`/editblog/${blog._id}`}>Edit</a>
                      </button>
                      <button onClick={() => deleteBlog(blog._id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Leagues */}
            <h2>Leagues</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leagues.map((league, index) => (
                  <tr key={league._id}>
                    <td>{index + 1}</td>
                    <td>{league.name}</td>
                    <td>{league.country}</td>
                    <td>
                      {/* <button onClick={() => editLeague(league)}>Edit</button> */}
                      <button onClick={() => deleteLeague(league._id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Leagues */}
            <h2>Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{order.title}</td>
                    <td>{order.country}</td>
                    <td>
                      {/* <button onClick={() => editLeague(league)}>Edit</button> */}
                      <button onClick={() => deleteBlog(order._id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Messages */}
            <h2>Messages</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message, index) => (
                  <tr key={message._id}>
                    <td>{index + 1}</td>
                    <td>{message.name}</td>
                    <td>{message.email}</td>
                    <td>{message.message}</td>

                    <td>
                      {/* <button onClick={() => editLeague(league)}>Edit</button> */}
                      <button onClick={() => deleteMessage(message._id)}>
                        {isFetching ? (
                          <CircularProgress size={16} color={"inherit"} />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      )}
    </div>
  );
}

export default AdminDashboard;
