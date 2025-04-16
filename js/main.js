/**
 * TalentAI Landing Page JavaScript
 * 
 * This file contains all the interactive functionality for the TalentAI landing page
 * including animations, form validation, and other interactive elements.
 */

$(document).ready(function() {
    
    // Smooth scrolling for navigation links
    $('a.nav-link, a.btn, .footer-links a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });
    
    // Sticky header on scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('header-scrolled');
        } else {
            $('.header').removeClass('header-scrolled');
        }
    });
    
    // AOS initialization removed to fix disappearing components issue
    
    // Counter animation for waiting list
    const counterElement = $('.counter');
    const counterValue = parseInt(counterElement.text());
    
    $({ countNum: 0 }).animate({ countNum: counterValue }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
            counterElement.text(Math.floor(this.countNum));
        },
        complete: function() {
            counterElement.text(this.countNum);
        }
    });
    
    // Play button for demo video
    $('.play-button').on('click', function() {
        // In a real implementation, this would trigger a video modal
        alert('デモ動画が再生されます');
    });
    
    // Form validation for waiting list
    $('#waitingListForm').on('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let isValid = true;
        const form = $(this);
        
        form.find('input[required], select[required], textarea[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        // Email validation
        const emailInput = $('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailInput.val())) {
            isValid = false;
            emailInput.addClass('is-invalid');
        }
        
        // If form is valid, show success message
        if (isValid) {
            // In a real implementation, this would submit the form via AJAX
            form.hide();
            form.after('<div class="alert alert-success mt-4" role="alert">' +
                       '<h4 class="alert-heading">登録ありがとうございます！</h4>' +
                       '<p>TalentAIの先行登録が完了しました。担当者より詳細についてご連絡いたします。</p>' +
                       '</div>');
        }
    });
    
    // Real-time form validation
    $('#waitingListForm input, #waitingListForm select, #waitingListForm textarea').on('change keyup', function() {
        if ($(this).val() !== '') {
            $(this).removeClass('is-invalid');
        }
    });
    
    // Mobile menu toggle
    $('.navbar-toggler').on('click', function() {
        if ($(this).hasClass('collapsed')) {
            $(this).removeClass('collapsed');
        } else {
            $(this).addClass('collapsed');
        }
    });
    
    // Close mobile menu when clicking a nav item
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Pricing card hover effect
    $('.pricing-card').hover(
        function() {
            if (!$(this).hasClass('popular')) {
                $(this).css('transform', 'translateY(-10px)');
            }
        },
        function() {
            if (!$(this).hasClass('popular')) {
                $(this).css('transform', 'translateY(0)');
            }
        }
    );
    
    // Feature card hover effect
    $('.feature-card, .function-card, .testimonial-card').hover(
        function() {
            $(this).css('transform', 'translateY(-10px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
    
    // Dynamic AOS attributes removed to fix disappearing components issue
    // Hover effects are kept for interactivity
});
