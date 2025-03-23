// components/admin/layout/AdminLayout.js
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const AdminLayout = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const navItems = [
    { 
      label: 'Dashboard', 
      path: '/admin', 
      icon: 'dashboard',
      exact: true
    },
    { 
      label: 'Content', 
      path: '/admin/content',
      icon: 'content',
      submenu: [
        { label: 'All Content', path: '/admin/content' },
        { label: 'Challenges', path: '/admin/content/challenges' },
        { label: 'Learning Modules', path: '/admin/content/learning' },
        { label: 'Relationship Modules', path: '/admin/content/relationships' }
      ]
    },
    { 
      label: 'Media Library', 
      path: '/admin/media',
      icon: 'media'
    },
    { 
      label: 'Users', 
      path: '/admin/users',
      icon: 'users'
    },
    { 
      label: 'Analytics', 
      path: '/admin/analytics',
      icon: 'analytics'
    },
    { 
      label: 'Settings', 
      path: '/admin/settings',
      icon: 'settings'
    }
  ];
  
  // Check if path matches or starts with the nav item path
  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };
  
  // Icon components (simplified - in a real app use an icon library)
  const getIcon = (name) => {
    return <span className={`admin-icon admin-icon-${name}`}></span>;
  };
  
  return (
    <div className="admin-layout">
      {/* Top Navigation Bar */}
      <header className="admin-header">
        <div className="admin-header-left">
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="admin-logo">
            <Link to="/admin">BoysToLeaders<span>Admin</span></Link>
          </div>
        </div>
        <div className="admin-header-right">
          <div className="admin-user-menu">
            <img 
              src={user?.avatarUrl || '/images/default-avatar.png'} 
              alt="User Avatar"
              className="admin-user-avatar"
            />
            <span className="admin-user-name">
              {user?.personalInfo?.firstName} {user?.personalInfo?.lastName}
            </span>
          </div>
        </div>
      </header>
      
      <div className="admin-container">
        {/* Sidebar Navigation */}
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <nav className="admin-nav">
            <ul className="admin-nav-list">
              {navItems.map((item) => (
                <li 
                  key={item.path} 
                  className={`admin-nav-item ${isActive(item.path, item.exact) ? 'active' : ''}`}
                >
                  <Link to={item.path} className="admin-nav-link">
                    {getIcon(item.icon)}
                    <span>{item.label}</span>
                  </Link>
                  
                  {item.submenu && (
                    <ul className="admin-nav-submenu">
                      {item.submenu.map((subitem) => (
                        <li 
                          key={subitem.path} 
                          className={`admin-nav-subitem ${location.pathname === subitem.path ? 'active' : ''}`}
                        >
                          <Link to={subitem.path}>
                            <span>{subitem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        
        {/* Main Content Area */}
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;