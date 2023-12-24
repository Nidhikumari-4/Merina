"use client";
import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";
import { Image } from "primereact/image";
import { Chart } from "primereact/chart";
import axios from "axios";
import { parse, format } from "date-fns";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.npoint.io/5f754613678cbebe119c"
      );
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: apiData?.Overall_Analytics?.GraphData.map((data) => data.Month),
    datasets: [
      {
        label: "Users",
        data: apiData?.Overall_Analytics?.GraphData.map((data) => data.Users),
        backgroundColor: "#7950F2",
      },
    ],
  };

  const revenueData = {
    labels: apiData?.RevenueGraph?.GraphData.map((data) => data.Year),
    datasets: [
      {
        label: "Revenue",
        data: apiData?.RevenueGraph?.GraphData.map((data) => data.Revenue),
        backgroundColor: "#E8E9FF",
      },
    ],
  };

  const monthlySubscriberData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: "Monthly Subscribers",
        data: apiData?.Monthly_Subscriber?.GraphData,
        backgroundColor: "#E8E9FF",
      },
    ],
  };

  const microPaymentData = {
    labels: apiData?.Micro_Payment?.GraphData.map((data) =>
      data.Time.toString()
    ),
    datasets: [
      {
        label: "Micro Payments",
        fill: "#C7C8EB;",
        data: apiData?.Micro_Payment?.GraphData.map((data) => data.User),
        borderColor: "#C7C8EB",
        tension: 0.4,
      },
    ],
  };

  const yearlySubscriberData = {
    labels: apiData?.yearly_Subscriber?.GraphData.map((data) => {
      const date = parse(data.Date, "dd-MM-yyyy", new Date());
      return format(date, "yyyy");
    }),
    datasets: [
      {
        label: "Yearly Subscribers",
        fill: "#C7C8EB;",
        data: apiData?.yearly_Subscriber?.GraphData.map(
          (data) => data.Subscribers
        ),
        borderColor: "#212121",
        tension: 0.4,
      },
    ],
  };

  const revenueChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return "$" + value.toLocaleString();
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    datasets: {
      bar: {
        barPercentage: 0.3,
      },
    },
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value >= 1000) {
              return value.toLocaleString() + "K";
            }
            return value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    datasets: {
      bar: {
        barPercentage: 0.3,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  const articleColumns = [
    { field: "title", header: "Title" },
    { field: "slug", header: "Slug" },
    { field: "storyviews", header: "Story Views" },
    { field: "paywallclicks", header: "Paywall Clicks" },
    { field: "purchase", header: "Purchase Amount" },
    { field: "read", header: "Read" },
  ];

  const formattedArticleData = apiData?.ArticleTable?.map((article) => ({
    title: article.Title,
    slug: article.slug,
    storyviews: article.StoryViews,
    paywallclicks: article.PaywallClicks,
    purchase: article.PurchaseAmount,
    read: <Image src="/send-sqaure-2.svg" alt="" />,
  }));

  const topUsers = [
    {
      image: <Image src="/topUser-one.png" alt="" width="60" />,
      name: "Harry Joe",
      title: "3 Article Purchased | 3 saved ",
      icon: <Image src="/message.svg" alt="" width="40" />,
    },
    {
      image: <Image src="/topUser-two.png" alt="" width="60" />,
      name: "Harry Joe",
      title: "3 Article Purchased | 3 saved ",
      icon: <Image src="/message.svg" alt="" width="40" />,
    },
    {
      image: <Image src="/topUser-three.png" alt="" width="60" />,
      name: "Harry Joe",
      title: "4 Article Purchased | 3 saved ",
      icon: <Image src="/message.svg" alt="" width="40" />,
    },
    {
      image: <Image src="/topUser-four.png" alt="" width="60" />,
      name: "Harry Joe",
      title: "4 Article Purchased | 3 saved ",
      icon: <Image src="/message.svg" alt="" width="40" />,
    },
  ];

  const countryData = [
    { country: "United Stats", visit: "13456" },
    { country: "Brazil", visit: "2345" },
    { country: "Russia", visit: "8300" },
    { country: "France", visit: "45678" },
    { country: "Canada", visit: "3421" },
    { country: "India", visit: "12300" },
  ];

  const recentActivities = [
    {
      icon: <Image src="/notification-violet.svg" alt="" width="50" />,
      time: "11:20",
      user: "New User",
      name: "Erik Pittman",
      heading: "Add New Post First Post»",
      text: "You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer.",
    },
    {
      icon: <Image src="/notification-violet.svg" alt="" width="50" />,
      time: "11:20",
      user: "New User",
      name: "Erik Pittman",
      heading: "Add New Post «Second Post»",
      text: "You might remember the Dell computer commercials in which a youth reports this exciting news to his friends...",
    },
    {
      icon: <Image src="/notification-violet.svg" alt="" width="50" />,
      time: "11:20",
      user: "New User",
      name: "Erik Pittman",
      heading: "Add New Post «Second Post»",
      text: "You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer.",
    },
  ];

  return (
    <div className="dashboard_page">
      <SideBar />

      <div className="dashboard_area">
        <Navbar />
        <div className="dashboard">
          <div className="welcome_img_text">
            <h1>Welcome Back , Akshita</h1>
            <p>Here is today’s report and performence</p>
          </div>

          {/* Users sections of dashboard */}
          <div className="user_stat">
            <span className="active_user">
              <span className="user">
                <Image src="/active-user.svg" alt="Image" width="50" />
                <p className="text">Active User</p>
                <p className="text_october">
                  <span className="highlight_text">+23.8%</span> From October
                </p>
              </span>
              <span className="user_no">1.64K</span>
            </span>

            <span className="new_user">
              <span className="user">
                <Image src="/new-user.svg" alt="Image" width="50" />
                <p className="text">New User</p>
                <p className="text_october">
                  <span className="highlight_text">+23.8%</span> From October
                </p>
              </span>
              <span className="user_no">4565</span>
            </span>

            <span className="repeat_user">
              <span className="user">
                <Image src="/repeat-user.svg" alt="Image" width="50" />
                <p className="text">Repeat User</p>
                <p className="text_october">
                  <span className="highlight_text">-23.8% </span> From October
                </p>
              </span>
              <span className="user_no">23.3K</span>
            </span>

            <span className="total_revenu">
              <span className="user">
                <Image src="/total-revenue.svg" alt="Image" width="50" />
                <p className="text">Total Revenue</p>
                <p className="text_october">
                  <span className="highlight_text">+34%</span> From October
                </p>
              </span>
              <span className="user_no">$45.64K</span>
            </span>
          </div>

          {/* Chart sections 1 */}
          <div className="chart_sec_one">
            <div className="analytics">
              <h3>Overall Analytics</h3>
              <p className="total">${apiData?.Overall_Analytics?.Total}K</p>
              <Chart
                type="bar"
                data={chartData}
                options={chartOptions}
                className="bar"
                height={300}
                width={900}
              />

              <div className="analytics_numbers">
                <span className="text">Number of stories published</span>
                <span className="text">
                  <p>Number of stories published</p>
                </span>
                <span className="text">
                  <p>Number of saved articles</p>
                </span>
                <span className="text">
                  <p>Number of article shared</p>
                </span>
              </div>
            </div>

            <div className="revenue">
              <h3>Revenue Chart</h3>
              <p className="total">${apiData?.RevenueGraph?.Total}K</p>

              <span className="revenue_chart_text">
                <p>Revenue chart by year</p>
                <p>Revenue chart by Month</p>
              </span>

              <Chart
                type="bar"
                data={revenueData}
                options={revenueChartOptions}
                height={300}
                width={550}
              />
            </div>
          </div>

          {/* Chart sections 2 */}
          <div className="chart_sec_two">
            <div className="micropayments">
              <div className="heading">
                <span>
                  <h3>Micropayments</h3>
                  <p className="revenue_text">Revenue</p>
                  <p className="total">${apiData?.Micro_Payment?.Total}K</p>
                </span>
                <span className="icon_part">
                  <Image src={"/seen.svg"} alt="" width="50" />
                </span>
              </div>
              <Chart
                type="line"
                data={microPaymentData}
                options={chartOptions}
                height={400}
                width={500}
              />
            </div>

            <div className="subscriber">
              <div className="heading">
                <span>
                  <h3>Monthly Subscriber</h3>
                  <p className="revenue_text">Revenue</p>
                  <p className="total">
                    ${apiData?.Monthly_Subscriber?.Total}K
                  </p>
                </span>
                <span className="icon_part">
                  <span className="calendar">
                    <p>2021-2022</p>
                    <Image src={"/calendar-black.svg"} alt="" width="20" />
                  </span>
                  <Image src={"/seen.svg"} alt="" width="50" />
                </span>
              </div>
              <Chart
                type="bar"
                data={monthlySubscriberData}
                options={chartOptions}
                height={400}
                width={500}
              />
            </div>

            <div className="yearly_subscriber">
              <div className="heading">
                <span>
                  <h3>Yearly Subscriber</h3>
                  <p className="revenue_text">Revenue</p>
                  <p className="total">${apiData?.yearly_Subscriber?.Total}K</p>
                </span>

                <span className="icon_part">
                  <span className="calendar">
                    <p>2021-2022</p>
                    <Image src={"/calendar-black.svg"} alt="" width="20" />
                  </span>
                  <Image src={"/seen.svg"} alt="" width="50" />
                </span>
              </div>
              <Chart
                type="line"
                data={yearlySubscriberData}
                options={chartOptions}
                height={400}
                width={500}
              />
            </div>
          </div>

          {/* Chart sections 3 */}
          <div className="chart_sec_three">
            <div className="top_stories">
              <h2>Top stories in last 30 days</h2>
              <span className="table_headings">
                <p className="latest">Latest Articles</p>
                <p>Popular Articles</p>
                <p>Tranding Articles</p>
              </span>
              <span>
                <DataTable
                  value={formattedArticleData}
                  paginator
                  rows={4}
                  paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                  tableStyle={{ minWidth: "50rem" }}
                  className="data_table"
                >
                  {articleColumns.map((column, index) => (
                    <Column
                      key={index}
                      paginator
                      field={column.field}
                      header={column.header}
                    />
                  ))}
                </DataTable>
              </span>
            </div>

            <div className="recent_activities">
              <span className="activities_heading">
                <h2> Recent Activities</h2>
                <p className="viewall">View All</p>
              </span>
              {recentActivities.map((activities, i) => (
                <span className="activities_box">
                  {activities.icon}
                  <span className="activities">
                    <span className="boxes">
                      <p>{activities.time}</p>
                      <p>{activities.user}</p>
                      <p>{activities.name}</p>
                    </span>
                    <span>
                      <h4>{activities.heading}</h4>
                    </span>
                    <span className="activities_box_text">
                      <p>{activities.text}</p>
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Chart sections 4 */}
          <div className="chart_sec_four">
            <div className="top_users">
              <span className="user_heading">
                <h2>Top user in last 30 days</h2>
                <p className="viewall">View All</p>
              </span>
              {topUsers.map((user, i) => (
                <div className="users_box">
                  <span className="users">
                    <span>{user.image}</span>
                    <span className="name_title">
                      <h4>{user.name}</h4>
                      <p className="title">{user.title}</p>
                    </span>
                  </span>
                  <span>{user.icon}</span>
                </div>
              ))}
            </div>

            <div className="location_country">
              <div className="location">
                <h2>User by Location</h2>
                <Image src="/world_map.png" alt="" width="500" />
              </div>
              <div className="country">
                <h2 className="heading_country">Top 10 country</h2>
                <span>
                  <DataTable
                    tableStyle={{
                      minWidth: "30rem",
                      maxHeight: "20rem",
                      overflow: "auto",
                    }}
                    value={countryData}
                  >
                    <Column field="country" header="Country" />
                    <Column field="visit" header="Visits" />
                  </DataTable>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
