/**
 * Career Compass - Main JavaScript File
 * This file contains all JavaScript functionality for the Career Compass website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', initApp);

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

/**
 * Fetch career paths from API or use mock data for development
 */
async function fetchCareerPaths() {
    try {
        const response = await fetch('/api/career-paths');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching career paths:', error);
        
        // Return mock data if API fails
        return [
            {
                id: 1,
                title: "Software Development",
                industry: "Technology",
                description: "Design, develop, and maintain software applications and systems that power modern businesses and services.",
                salaryRange: "$75,000 - $150,000",
                growthRate: "22%",
                education: "Bachelor's Degree",
                icon: "fas fa-code",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
                isHighDemand: true
            },
            {
                id: 2,
                title: "Data Science",
                industry: "Technology",
                description: "Analyze complex data to help organizations make better decisions and predict future trends.",
                salaryRange: "$90,000 - $160,000",
                growthRate: "28%",
                education: "Master's Degree",
                icon: "fas fa-chart-line",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                isHighDemand: true
            },
            {
                id: 3,
                title: "UX/UI Design",
                industry: "Creative",
                description: "Create intuitive, accessible, and engaging digital experiences that meet user needs and business goals.",
                salaryRange: "$65,000 - $130,000",
                growthRate: "15%",
                education: "Bachelor's Degree",
                icon: "fas fa-paint-brush",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                isHighDemand: false
            },
            {
                id: 4,
                title: "Digital Marketing",
                industry: "Business",
                description: "Develop and implement marketing strategies using digital channels to reach and engage target audiences.",
                salaryRange: "$50,000 - $120,000",
                growthRate: "10%",
                education: "Bachelor's Degree",
                icon: "fas fa-bullhorn",
                image: "https://images.unsplash.com/photo-1533750349088-cd871a92f7e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                isHighDemand: false
            },
            {
                id: 5,
                title: "Healthcare Management",
                industry: "Healthcare",
                description: "Plan, direct, and coordinate medical and health services, ensuring efficiency, quality, and compliance.",
                salaryRange: "$70,000 - $140,000",
                growthRate: "18%",
                education: "Master's Degree",
                icon: "fas fa-hospital",
                image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                isHighDemand: true
            },
            {
                id: 6,
                title: "Financial Analyst",
                industry: "Finance",
                description: "Evaluate financial data and market trends to help businesses and individuals make investment decisions.",
                salaryRange: "$65,000 - $125,000",
                growthRate: "9%",
                education: "Bachelor's Degree",
                icon: "fas fa-chart-pie",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                isHighDemand: false
            }
        ];
    }
}

/**
 * Fetch categories from API or use mock data for development
 */
async function fetchCategories() {
    try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        
        // Return mock data if API fails
        return [
            { id: 1, name: "Technology", icon: "laptop-code", count: 42, color: "blue" },
            { id: 2, name: "Healthcare", icon: "heartbeat", count: 38, color: "green" },
            { id: 3, name: "Finance", icon: "chart-line", count: 27, color: "purple" },
            { id: 4, name: "Education", icon: "graduation-cap", count: 23, color: "yellow" },
            { id: 5, name: "Creative", icon: "paint-brush", count: 31, color: "orange" },
            { id: 6, name: "Engineering", icon: "cogs", count: 19, color: "red" }
        ];
    }
}

/**
 * Render career path cards
 * @param {Array} careerPaths - Array of career path objects
 */
function renderCareerPaths(careerPaths) {
    const container = document.getElementById('featuredPaths');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    careerPaths.forEach(path => {
        const card = document.createElement('div');
        card.className = 'path-card';
        
        // High demand badge
        let highDemandBadge = '';
        if (path.isHighDemand) {
            highDemandBadge = '<div class="high-demand-badge">High Demand</div>';
        }
        
        card.innerHTML = `
            <div class="path-card-image">
                <img src="${path.image}" alt="${path.title}">
                ${highDemandBadge}
            </div>
            <div class="path-card-content">
                <div class="path-card-header">
                    <div class="path-card-icon">
                        <i class="${path.icon}"></i>
                    </div>
                    <div>
                        <h3 class="path-card-title">${path.title}</h3>
                        <div class="path-card-industry">${path.industry}</div>
                    </div>
                </div>
                <p>${path.description}</p>
                <div class="path-card-details">
                    <div class="path-detail">
                        <i class="fas fa-money-bill-wave salary-icon"></i>
                        <span>${path.salaryRange}</span>
                    </div>
                    <div class="path-detail">
                        <i class="fas fa-chart-line growth-icon"></i>
                        <span>${path.growthRate} Growth Rate</span>
                    </div>
                    <div class="path-detail">
                        <i class="fas fa-user-graduate education-icon"></i>
                        <span>${path.education}</span>
                    </div>
                </div>
                <a href="career-path.html?id=${path.id}" class="path-card-link">
                    View Details <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

/**
 * Render category cards
 * @param {Array} categories - Array of category objects
 */
function renderCategories(categories) {
    const container = document.getElementById('categoriesGrid');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = `category-card category-${category.color}`;
        
        card.innerHTML = `
            <div class="category-icon">
                <i class="fas fa-${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <div class="category-count">${category.count} Career Paths</div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `explore.html?category=${category.id}`;
        });
        
        container.appendChild(card);
    });
}

/**
 * Create and show a detail page for a specific career path
 * This would be implemented on career-path.html page
 * @param {number} pathId - ID of the career path
 */
async function showCareerPathDetail(pathId) {
    // This function would be implemented in career-path.js
    // Included here for completeness
}

/**
 * Initialize the application
 */
async function initApp() {
    // Add event listener for mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Load career paths for the home page
    const careerPaths = await fetchCareerPaths();
    renderCareerPaths(careerPaths);
    
    // Load categories for the home page
    const categories = await fetchCategories();
    renderCategories(categories);
    
    // Add event listeners for search form
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchInput = searchForm.querySelector('input').value;
            const industrySelect = searchForm.querySelector('select').value;
            
            window.location.href = `explore.html?search=${searchInput}&industry=${industrySelect}`;
        });
    }
    
    // Add event listeners for popular search tags
    const searchTags = document.querySelectorAll('.tag');
    searchTags.forEach(tag => {
        tag.addEventListener('click', function() {
            window.location.href = `explore.html?search=${tag.textContent}`;
        });
    });
}