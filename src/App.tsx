import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import { clsx } from 'clsx';

type StatCard = {
  label: string;
  value: string;
  sub?: string;
  accent?: string;
  icon?: string;
};

const palette = ['#7b7fff', '#4ad7f8', '#5be7b6', '#f78c6c'];

const stats: StatCard[] = [
  { label: 'Earnings', value: '$350.4', sub: '+2.45% vs last month', icon: '💳' },
  { label: 'Spend this month', value: '$682.5', sub: '-1.35% vs last month', icon: '📈' },
  { label: 'Sales', value: '$574.34', sub: '+8.3% vs last week', icon: '🛒' },
  { label: 'Your balance', value: '$1,000', sub: '**** **** 7656', icon: '💰' },
  { label: 'New tasks', value: '154', sub: '24 completed', icon: '📋' },
  { label: 'Total projects', value: '2,935', sub: '31 active', icon: '📦' }
];

const lineData = [
  { name: 'Sep', spend: 42, save: 36 },
  { name: 'Oct', spend: 55, save: 48 },
  { name: 'Nov', spend: 62, save: 50 },
  { name: 'Dec', spend: 80, save: 60 },
  { name: 'Jan', spend: 72, save: 63 },
  { name: 'Feb', spend: 90, save: 70 }
];

const barData = [
  { name: '17', uv: 60 },
  { name: '18', uv: 68 },
  { name: '19', uv: 72 },
  { name: '20', uv: 64 },
  { name: '21', uv: 80 },
  { name: '22', uv: 86 },
  { name: '23', uv: 90 },
  { name: '24', uv: 70 },
  { name: '25', uv: 88 }
];

const pieData = [
  { name: 'Your files', value: 63 },
  { name: 'System', value: 25 },
  { name: 'Empty', value: 12 }
];

const tableRows = [
  { name: 'Horizon UI PRO', progress: '75.2%', quantity: 2430, date: '24 Jan 2021', status: 'Approved' },
  { name: 'Horizon UI Free', progress: '21.3%', quantity: 1483, date: '12 Jan 2021', status: 'Disable' },
  { name: 'Weekly Update', progress: '63.5%', quantity: 1024, date: '12 Jan 2021', status: 'Approved' },
  { name: 'Venus 3D Asset', progress: '24.5%', quantity: 858, date: '07 Jan 2021', status: 'Error' },
  { name: 'Marketplace', progress: '12.2%', quantity: 258, date: '17 Dec 2020', status: 'Approved' }
];

const team = [
  { name: 'Adele Hanson', role: 'Creative Director' },
  { name: 'Christian Mad', role: 'Product Designer' },
  { name: 'Jason Statham', role: 'Jr. Graphic Designer' }
];

const tasks = ['Landing Page Design', 'Dashboard Builder', 'Mobile App Design', 'Illustrations', 'Promotional LP'];

function Tag({ children, tone = 'neutral' }: { children: string; tone?: 'success' | 'warning' | 'danger' | 'neutral' }) {
  return (
    <span
      className={clsx('tag', {
        success: tone === 'success',
        warning: tone === 'warning',
        danger: tone === 'danger',
        neutral: tone === 'neutral'
      })}
    >
      {children}
    </span>
  );
}

function Card({ title, action, children }: { title?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="card">
      <header className="card-head">
        {title && <h3>{title}</h3>}
        {action}
      </header>
      {children}
    </section>
  );
}

export default function App() {
  const statusTone = useMemo(
    () => ({
      Approved: 'success',
      Disable: 'warning',
      Error: 'danger'
    }),
    []
  );

  return (
    <div className="page">
      <aside className="sidebar">
        <div className="brand">
          <span className="dot" /> HORIZON <span className="muted">FREE</span>
        </div>
        <nav>
          {['Dashboard', 'NFT Marketplace', 'Tables', 'Kanban', 'Profile', 'Sign in'].map(item => (
            <a key={item} className="nav-link">
              <span>•</span>
              {item}
            </a>
          ))}
        </nav>
        <div className="cta">
          <div className="cta-icon">📍</div>
          <div className="cta-body">
            <p>Upgrade to PRO to get access to all features!</p>
            <button>Get PRO</button>
          </div>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <div>
            <div className="crumbs">Pages / Dashboard</div>
            <div className="title">Main Dashboard</div>
          </div>
          <div className="top-actions">
            <input className="search" placeholder="Search" />
            <button className="icon-btn">🌙</button>
            <button className="icon-btn">🌐</button>
            <button className="icon-btn">🔔</button>
            <div className="avatar">JD</div>
          </div>
        </header>

        <div className="grid stats">
          {stats.map(card => (
            <section key={card.label} className="stat">
              <div className="stat-icon">{card.icon}</div>
              <div className="stat-body">
                <p className="stat-label">{card.label}</p>
                <div className="stat-value">{card.value}</div>
                {card.sub && <p className="stat-sub">{card.sub}</p>}
              </div>
            </section>
          ))}
        </div>

        <div className="grid main-grid">
          <Card title="This month" action={<span className="pill success">On track</span>}>
            <div className="big-number">$37.5K</div>
            <div className="mini-grid">
              <div>
                <div className="muted">Total Spent</div>
                <div className="accent">+2.45%</div>
              </div>
              <div className="muted">Sep - Feb</div>
            </div>
            <div className="chart">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
                  <XAxis dataKey="name" stroke="#6e7ba6" />
                  <YAxis stroke="#6e7ba6" />
                  <Tooltip />
                  <Line type="monotone" dataKey="spend" stroke="#7b7fff" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="save" stroke="#4ad7f8" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Weekly Revenue">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
                <XAxis dataKey="name" stroke="#6e7ba6" />
                <YAxis stroke="#6e7ba6" />
                <Tooltip />
                <Bar dataKey="uv" fill="#7b7fff" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Daily Traffic">
            <div className="big-number">2,579</div>
            <p className="muted">Visitors</p>
            <div className="accent">+2.45%</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={barData}>
                <XAxis dataKey="name" hide />
                <Bar dataKey="uv" fill="#4ad7f8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Your Pie Chart">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={4}>
                  {pieData.map((entry, idx) => (
                    <Cell key={entry.name} fill={palette[idx % palette.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              {pieData.map((item, idx) => (
                <div key={item.name} className="legend-row">
                  <span className="swatch" style={{ background: palette[idx % palette.length] }} />
                  {item.name} — {item.value}%
                </div>
              ))}
            </div>
          </Card>

          <Card title="Check Table">
            <div className="table">
              <div className="table-head">
                <span>NAME</span>
                <span>PROGRESS</span>
                <span>QUANTITY</span>
                <span>DATE</span>
              </div>
              {tableRows.map(row => (
                <div key={row.name} className="table-row">
                  <span>{row.name}</span>
                  <span className="muted">{row.progress}</span>
                  <span className="muted">{row.quantity.toLocaleString()}</span>
                  <span className="muted">{row.date}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Complex Table">
            <div className="table">
              <div className="table-head">
                <span>NAME</span>
                <span>STATUS</span>
                <span>DATE</span>
                <span>PROGRESS</span>
              </div>
              {tableRows.map(row => (
                <div key={row.name} className="table-row">
                  <span>{row.name}</span>
                  <span>
                    <Tag tone={statusTone[row.status as keyof typeof statusTone] as any}>{row.status}</Tag>
                  </span>
                  <span className="muted">{row.date}</span>
                  <span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: row.progress }} />
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Tasks">
            <ul className="tasks">
              {tasks.map(task => (
                <li key={task}>
                  <input type="checkbox" /> {task}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Team members">
            <ul className="team">
              {team.map(member => (
                <li key={member.name}>
                  <div className="avatar small">{member.name[0]}</div>
                  <div>
                    <div>{member.name}</div>
                    <div className="muted">{member.role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Control card security">
            <p className="muted">Discover our cards benefits with one tap.</p>
            <button className="primary">Cards</button>
          </Card>

          <Card title="What do you need to know to create better products?">
            <p className="muted">85 mins • Video format</p>
            <div className="avatars">
              {['M', 'A', 'S', 'L'].map(letter => (
                <div key={letter} className="avatar small">
                  {letter}
                </div>
              ))}
            </div>
            <button className="primary">Get Started</button>
          </Card>
        </div>
      </div>
    </div>
  );
}

