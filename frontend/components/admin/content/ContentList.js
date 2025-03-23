// components/admin/content/ContentList.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchContent, updateContentStatus } from '../../../utils/api';

const ContentList = ({ contentType }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0
  });
  const [filters, setFilters] = useState({
    status: '',
    search: '',
    sortBy: 'updatedAt',
    sortDir: 'desc'
  });
  
  useEffect(() => {
    loadContent();
  }, [contentType, pagination.currentPage, filters]);
  
  const loadContent = async () => {
    try {
      setLoading(true);
      
      const queryParams = new URLSearchParams({
        page: pagination.currentPage,
        limit: 10,
        ...filters
      });
      
      if (contentType && contentType !== 'all') {
        queryParams.append('contentType', contentType);
      }
      
      const response = await fetchContent(queryParams.toString());
      
      setContent(response.content);
      setPagination({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalCount: response.totalCount
      });
    } catch (error) {
      console.error('Error loading content:', error);
      // Show error notification
    } finally {
      setLoading(false);
    }
  };
  
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
    
    // Reset to first page when filters change
    setPagination(prev => ({
      ...prev,
      currentPage: 1
    }));
  };
  
  const handleSortChange = (field) => {
    setFilters(prev => ({
      ...prev,
      sortBy: field,
      sortDir: prev.sortBy === field && prev.sortDir === 'desc' ? 'asc' : 'desc'
    }));
  };
  
  const handleStatusChange = async (contentId, newStatus) => {
    try {
      await updateContentStatus(contentId, newStatus);
      
      // Update local state
      setContent(prev => 
        prev.map(item => 
          item._id === contentId ? { ...item, status: newStatus } : item
        )
      );
      
      // Show success notification
    } catch (error) {
      console.error('Error updating status:', error);
      // Show error notification
    }
  };
  
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.totalPages) return;
    
    setPagination(prev => ({
      ...prev,
      currentPage: newPage
    }));
  };
  
  // Format date nicely
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Get appropriate label for content type
  const getContentTypeLabel = (type) => {
    switch (type) {
      case 'Challenge': return 'Challenge';
      case 'LearningModule': return 'Learning Module';
      case 'RelationshipModule': return 'Relationship Module';
      default: return type;
    }
  };
  
  return (
    <div className="content-list">
      {/* Filters */}
      <div className="content-filters">
        <div className="filter-row">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search content..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          
          <div className="status-filter">
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="draft">Draft</option>
              <option value="review">In Review</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Content Table */}
      <div className="content-table-container">
        {loading ? (
          <div className="loading-spinner">Loading content...</div>
        ) : (
          <>
            <table className="content-table">
              <thead>
                <tr>
                  <th 
                    className={`sortable ${filters.sortBy === 'title' ? `sorted-${filters.sortDir}` : ''}`}
                    onClick={() => handleSortChange('title')}
                  >
                    Title
                  </th>
                  {!contentType && (
                    <th>Type</th>
                  )}
                  <th 
                    className={`sortable ${filters.sortBy === 'status' ? `sorted-${filters.sortDir}` : ''}`}
                    onClick={() => handleSortChange('status')}
                  >
                    Status
                  </th>
                  <th 
                    className={`sortable ${filters.sortBy === 'updatedAt' ? `sorted-${filters.sortDir}` : ''}`}
                    onClick={() => handleSortChange('updatedAt')}
                  >
                    Last Updated
                  </th>
                  <th>Created By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {content.length > 0 ? (
                  content.map((item) => (
                    <tr key={item._id}>
                      <td className="title-cell">
                        <Link to={`/admin/content/edit/${item._id}`}>
                          {item.title}
                        </Link>
                      </td>
                      {!contentType && (
                        <td>{getContentTypeLabel(item.contentType)}</td>
                      )}
                      <td>
                        <span className={`status-badge status-${item.status}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </td>
                      <td>{formatDate(item.updatedAt)}</td>
                      <td>
                        {item.createdBy?.firstName} {item.createdBy?.lastName}
                      </td>
                      <td className="actions-cell">
                        <Link 
                          to={`/admin/content/edit/${item._id}`}
                          className="action-btn edit-btn"
                        >
                          Edit
                        </Link>
                        
                        <div className="status-dropdown">
                          <button className="action-btn status-btn">
                            Status
                          </button>
                          <div className="dropdown-menu">
                            <button 
                              onClick={() => handleStatusChange(item._id, 'draft')}
                              disabled={item.status === 'draft'}
                            >
                              Set to Draft
                            </button>
                            <button 
                              onClick={() => handleStatusChange(item._id, 'review')}
                              disabled={item.status === 'review'}
                            >
                              Submit for Review
                            </button>
                            <button 
                              onClick={() => handleStatusChange(item._id, 'published')}
                              disabled={item.status === 'published'}
                            >
                              Publish
                            </button>
                            <button 
                              onClick={() => handleStatusChange(item._id, 'archived')}
                              disabled={item.status === 'archived'}
                            >
                              Archive
                            </button>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/admin/content/preview/${item._id}`}
                          className="action-btn preview-btn"
                        >
                          Preview
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={contentType ? 5 : 6} className="no-content-cell">
                      No content found. <Link to="/admin/content/create">Create one</Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="pagination-btn"
                  disabled={pagination.currentPage === 1}
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                >
                  Previous
                </button>
                
                <div className="pagination-info">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </div>
                
                <button 
                  className="pagination-btn"
                  disabled={pagination.currentPage === pagination.totalPages}
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContentList;