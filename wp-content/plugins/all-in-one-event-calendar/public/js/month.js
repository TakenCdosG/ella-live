timely.define(["external_libs/twig","month"],function(e){var t,n;return t=e.twig,n=t({id:"../js_src/month.twig",data:[{type:"output",stack:[{type:"Twig.expression.type.variable",value:"navigation",match:["navigation"]},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:'\n\n<table class="ai1ec-month-view ai1ec-popover-boundary\n	'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"month_word_wrap",match:["month_word_wrap"]}],output:[{type:"raw",value:"ai1ec-word-wrap"}]}},{type:"raw",value:'">\n	<thead>\n		<tr>\n			'},{type:"logic",token:{type:"Twig.logic.type.for",key_var:null,value_var:"weekday",expression:[{type:"Twig.expression.type.variable",value:"weekdays",match:["weekdays"]}],output:[{type:"raw",value:'				<th scope="col" class="ai1ec-weekday">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"weekday",match:["weekday"]}]},{type:"raw",value:"</th>\n			"}]}},{type:"raw",value:"		</tr>\n	</thead>\n	<tbody>\n		"},{type:"logic",token:{type:"Twig.logic.type.for",key_var:null,value_var:"week",expression:[{type:"Twig.expression.type.variable",value:"cell_array",match:["cell_array"]}],output:[{type:"raw",value:"			"},{type:"logic",token:{type:"Twig.logic.type.set",key:"added_stretcher",expression:[{type:"Twig.expression.type.bool",value:!1}]}},{type:"raw",value:'			<tr class="ai1ec-week">\n				'},{type:"logic",token:{type:"Twig.logic.type.for",key_var:null,value_var:"day",expression:[{type:"Twig.expression.type.variable",value:"week",match:["week"]}],output:[{type:"raw",value:"\n					"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"day",match:["day"]},{type:"Twig.expression.type.key.period",key:"date"}],output:[{type:"raw",value:"						<td "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"day",match:["day"]},{type:"Twig.expression.type.key.period",key:"today"}],output:[{type:"raw",value:'class="ai1ec-today"'}]}},{type:"raw",value:">\n							"},{type:"raw",value:"\n							"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"added_stretcher",match:["added_stretcher"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"}],output:[{type:"raw",value:'								<div class="ai1ec-day-stretcher"></div>\n								'},{type:"logic",token:{type:"Twig.logic.type.set",key:"added_stretcher",expression:[{type:"Twig.expression.type.bool",value:!0}]}},{type:"raw",value:"							"}]}},{type:"raw",value:'\n							<div class="ai1ec-day">\n								<div class="ai1ec-date">\n									<a class="ai1ec-load-view"\n										'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"data_type",match:["data_type"]},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:'\n										href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"day",match:["day"]},{type:"Twig.expression.type.key.period",key:"date_link"},{type:"Twig.expression.type.filter",value:"e",match:["| e","e"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"html_attr"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'"\n										>'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"day",match:["day"]},{type:"Twig.expression.type.key.period",key:"date"}]},{type:"raw",value:"</a>\n								</div>\n\n								"},{type:"logic",token:{type:"Twig.logic.type.for",key_var:null,value_var:"event",expression:[{type:"Twig.expression.type.variable",value:"day",match:["day"]},{type:"Twig.expression.type.key.period",key:"events"}],output:[{type:"raw",value:'									<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"instance_permalink"},{type:"Twig.expression.type.filter",value:"e",match:["| e","e"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"html_attr"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'"\n										'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"data_type_events",match:["data_type_events"]},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"\n										"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"is_multiday"}],output:[{type:"raw",value:'											data-end-day="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"multiday_end_day"}]},{type:"raw",value:'"\n											data-start-truncated="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"start_truncated"},{type:"Twig.expression.type.string",value:"true"},{type:"Twig.expression.type.string",value:"false"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'"\n											data-end-truncated="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"end_truncated"},{type:"Twig.expression.type.string",value:"true"},{type:"Twig.expression.type.string",value:"false"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'"\n										'}]}},{type:"raw",value:'										data-instance-id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"instance_id"}]},{type:"raw",value:'"\n										class="ai1ec-event-container ai1ec-load-event\n											ai1ec-popup-trigger\n											ai1ec-event-id-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"post_id"}]},{type:"raw",value:"\n											ai1ec-event-instance-id-"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"instance_id"}]},{type:"raw",value:"\n											"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"is_allday"}],output:[{type:"raw",value:"ai1ec-allday"}]}},{type:"raw",value:"											"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"is_multiday"}],output:[{type:"raw",value:"ai1ec-multiday"}]}},{type:"raw",value:'"\n										>\n\n										<div class="ai1ec-event"\n											 style="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"color_style"},{type:"Twig.expression.type.filter",value:"e",match:["| e","e"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"html_attr"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'">\n											<span class="ai1ec-event-title">\n												'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"filtered_title"},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"\n											</span>\n											"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"is_allday"},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"}],output:[{type:"raw",value:'												<span class="ai1ec-event-time">\n													'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"short_start_time"}]},{type:"raw",value:"\n												</span>\n											"}]}},{type:"raw",value:'										</div>\n									</a>\n									\n									<div class="ai1ec-popover ai1ec-popup ai1ec-popup-in-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]}]},{type:"raw",value:'-view">\n										'},{type:"logic",token:{type:"Twig.logic.type.set",key:"category_colors",expression:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"category_colors"}]}},{type:"raw",value:"										"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"category_colors",match:["category_colors"]}],output:[{type:"raw",value:'											<div class="ai1ec-color-swatches">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"category_colors",match:["category_colors"]},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"</div>\n										"}]}},{type:"raw",value:'										<span class="ai1ec-popup-title">\n											<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"permalink"},{type:"Twig.expression.type.filter",value:"e",match:["| e","e"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"html_attr"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'"\n												>'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"filtered_title"},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"</a>\n											"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"show_location_in_title",match:["show_location_in_title"]},{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"venue"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:'												<span class="ai1ec-event-location"\n													>'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text_venue_separator",match:["text_venue_separator"]},{type:"Twig.expression.type.filter",value:"format",match:["| format","format"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"venue"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:"</span>\n											"}]}},{type:"raw",value:"											"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_ticket_button_enabled",match:["is_ticket_button_enabled"]},{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"ticket_url"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:'												<a class="ai1ec-pull-right ai1ec-btn ai1ec-btn-primary ai1ec-btn-xs\n													ai1ec-buy-tickets" target="_blank"\n													href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"ticket_url"},{type:"Twig.expression.type.filter",value:"e",match:["| e","e"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"html_attr"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'"\n													>'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"ticket_url_label"}]},{type:"raw",value:"</a>\n											"}]}},{type:"raw",value:"										</span>\n										"},{type:"logic",token:{type:"Twig.logic.type.set",key:"edit_post_link",expression:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"edit_post_link"}]}},{type:"raw",value:"										"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"edit_post_link",match:["edit_post_link"]}],output:[{type:"raw",value:'											<a class="post-edit-link" href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"edit_post_link",match:["edit_post_link"]},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:'">\n												<i class="ai1ec-fa ai1ec-fa-pencil"></i> '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text_edit",match:["text_edit"]}]},{type:"raw",value:"\n											</a>\n										"}]}},{type:"raw",value:'										<div class="ai1ec-event-time">\n											'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"popup_timespan"},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"\n										</div>\n										"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"avatar"},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"\n										"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"post_excerpt"}],output:[{type:"raw",value:'											<div class="ai1ec-popup-excerpt">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"event",match:["event"]},{type:"Twig.expression.type.key.period",key:"post_excerpt"},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"]}]},{type:"raw",value:"</div>\n										"}]}},{type:"raw",value:"									</div>\n\n								"}]}},{type:"raw",value:"							</div>\n						</td>\n					"}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:" "},{type:"raw",value:'\n						<td class="ai1ec-empty"></td>\n					'}]}},{type:"raw",value:" "},{type:"raw",value:"\n\n				"}]}},{type:"raw",value:" "},{type:"raw",value:"\n			</tr>\n		"}]}},{type:"raw",value:" "},{type:"raw",value:"\n	</tbody>\n</table>\n"}],precompiled:!0}),n});