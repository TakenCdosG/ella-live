<?php
if( !defined('ABSPATH') ) exit;
// Write your functions here.

// Custom post type function
function create_widget_posttype() {

	register_post_type( 'ella-widget',
	// CPT Options
		array(
			'labels' => array(
				'name' => __( 'Home widgets' ),
				'singular_name' => __( 'Home widget' )
			),
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'custom-fields', ),
			'public' => true,
			'show_in_admin_bar' => true,
			'has_archive' => true,
			'capability_type' => 'page',
			'rewrite' => array('slug' => 'ella-widget'),
		)
	);
}

// Shortcode: [ella-widget id="#"]
function build_widget( $attr ) {
	$args = shortcode_atts( array( 'id' => 1 ), $attr );
	$structure = '<div id="widget-' . $args['id'] . '" class="ella-wrapper">';
	
	// The Query
	$args = array(
		'post_type' => 'ella-widget',
		'p' => $args['id']
	);
	$the_query = new WP_Query( $args );
	
	// The Loop
	if ( $the_query->have_posts() ) {
		$the_query->the_post();
		
		$classes = "";
		if (has_post_thumbnail()) {
			$structure .= '<div class="widget-back-image">';
			$structure .= get_the_post_thumbnail();
			$structure .= '</div>';
			$classes .= "over-image ";
		}
		
		// Absolute positioned container for the text
		$structure .= '<div class="widget-text ' . $classes . '">';
		$structure .= get_the_content();
		$structure .= '</div>';
	}
	// Restore original Post Data
	wp_reset_postdata();
	
	$structure .= '</div>';
	
	return $structure;
}

// Hooking up function to create the Home widgets post type
add_action( 'init', 'create_widget_posttype' );

// Shortcode generator for the widgets on the homepage
add_shortcode( 'ella-widget', 'build_widget' );

// Advanced TinyMCE editor styles
wp_enqueue_style( 'editor', get_stylesheet_directory_uri() . '/editor-style.css' );
