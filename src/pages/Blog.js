import React from 'react';
import '../style/blog_style.css';
function Blog() {
  return (
    <section className="blog-section">
    <div className="blog-container">
        <div className="blog-header">
            <h1>My Development Services</h1>
            <p>I deliver high-quality solutions with a focus on clean code, thorough documentation, and client satisfaction. Here's what you can expect when working with me.</p>
        </div>
        
        <div className="blog-grid">
            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <h3>Clean, Structured Codebase</h3>
                    <p>I prioritize writing maintainable, well-organized code following industry best practices and design patterns.</p>
                    <ul>
                        <li>Modular architecture for easy maintenance</li>
                        <li>Consistent coding standards</li>
                        <li>Proper separation of concerns</li>
                        <li>Meaningful naming conventions</li>
                        <li>Optimized for performance</li>
                    </ul>
                </div>
            </div>
  
            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-book"></i>
                    </div>
                    <h3>Comprehensive Documentation</h3>
                    <p>Every project includes detailed documentation to ensure smooth handoffs and future maintenance.</p>
                    <ul>
                        <li>Project setup instructions</li>
                        <li>API documentation</li>
                        <li>Code comments and explanations</li>
                        <li>Architecture diagrams</li>
                        <li>User guides when applicable</li>
                    </ul>
                </div>
            </div>
            

            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <h3>Quality Assurance</h3>
                    <p>I maintain rigorous quality standards throughout the development process.</p>
                    <ul>
                        <li>Peer code reviews</li>
                        <li>Static code analysis</li>
                        <li>Performance optimization</li>
                        <li>Security best practices</li>
                        <li>Accessibility compliance</li>
                    </ul>
                </div>
            </div>
            
            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h3>Product Accuracy</h3>
                    <p>I ensure the final product matches your specifications and requirements.</p>
                    <ul>
                        <li>Detailed requirement analysis</li>
                        <li>Regular progress demos</li>
                        <li>Strict adherence to specifications</li>
                        <li>Attention to detail in implementation</li>
                        <li>Pixel-perfect designs when applicable</li>
                    </ul>
                </div>
            </div>

            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <h3>Timely Delivery</h3>
                    <p>I respect deadlines and deliver projects on schedule.</p>
                    <ul>
                        <li>Clear project timelines</li>
                        <li>Milestone-based development</li>
                        <li>Progress tracking</li>
                        <li>Early risk identification</li>
                        <li>Transparent communication about delays</li>
                    </ul>
                </div>
            </div>

            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-wallet"></i>
                    </div>
                    <h3>Budget-Friendly Solutions</h3>
                    <p>I provide cost-effective solutions without compromising quality.</p>
                    <ul>
                        <li>Competitive pricing</li>
                        <li>Efficient development practices</li>
                        <li>Value-focused recommendations</li>
                        <li>No hidden costs</li>
                        <li>Flexible engagement models</li>
                    </ul>
                </div>
            </div>
            
  
            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-comments"></i>
                    </div>
                    <h3>Customer Interaction</h3>
                    <p>I maintain open communication channels throughout our collaboration.</p>
                    <ul>
                        <li>Regular progress updates</li>
                        <li>Responsive to queries</li>
                        <li>Multiple communication channels</li>
                        <li>Cultural sensitivity</li>
                        <li>Clear expectation setting</li>
                    </ul>
                </div>
            </div>

            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <h3>Review Opportunities</h3>
                    <p>You'll have multiple chances to review and provide feedback.</p>
                    <ul>
                        <li>Iterative development process</li>
                        <li>Staging environment for previews</li>
                        <li>Formal review points</li>
                        <li>Change request process</li>
                        <li>Final approval before delivery</li>
                    </ul>
                </div>
            </div>
            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-save"></i>
                    </div>
                    <h3>Backup & Source Files</h3>
                    <p>Your project assets are securely managed and delivered.</p>
                    <ul>
                        <li>Version control system</li>
                        <li>Regular backups</li>
                        <li>Complete source file delivery</li>
                        <li>Asset organization</li>
                        <li>Ownership transfer</li>
                    </ul>
                </div>
            </div>

            <div className="blog-item">
                <div className="blog-item-content">
                    <div className="blog-icon">
                        <i className="fas fa-vial"></i>
                    </div>
                    <h3>Testing & QA</h3>
                    <p>Comprehensive testing ensures a bug-free product.</p>
                    <ul>
                        <li>Unit testing</li>
                        <li>Integration testing</li>
                        <li>User acceptance testing</li>
                        <li>Cross-browser testing</li>
                        <li>Performance testing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Blog;