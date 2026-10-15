// ================= قاموس الترجمة الشامل (عربي - إنجليزي) =================
const translations = {
  "ar": {
    "offline_title": "أنت غير متصل بالإنترنت!",
    "offline_desc": "يرجى التحقق من اتصالك بالشبكة لتصفح جميع خدماتنا.",
    "offline_btn": "إعادة المحاولة",
    "brand_name_1": "مركز TM لصيانة الأجهزة المنزلية",
    "nav_home": "الرئيسية",
    "nav_services": "الخدمات",
    "nav_brands": "الماركات",
    "nav_locations": "بنصلح فين",
    "nav_about": "من نحن",
    "nav_book": "احجز الآن",
    "search_placeholder": "ابحث عن خدمة، ماركة، أو محافظة...",
    "search_popular": "الأكثر بحثاً: ",
    "search_tag_1": "صيانة ثلاجات",
    "search_tag_2": "غسالات LG",
    "search_tag_3": "الساحل الشمالي",
    "loader_text": "صيانة الأجهزة",
    "hero_badge": "خدمة عملاء تواصل معنا لمعرفة مواعيد الخدمة",
    "hero_title": "أقرب شركة صيانة أجهزة منزلية لحد باب بيتك",
    "hero_desc": "الغسالة وقفت في نص الغسيل؟ التكييف مبيبردش؟ الشاشة فاصلة؟ مكالمة واحدة وبحسب المواعيد المتاحة الفني هيكون عندك يصلح الجهاز قدام عينك بتفاصيل ضمان حسب الخدمة.",
    "hero_btn_book": "احجز صيانة دلوقتي",
    "hero_btn_call": "اتصل بنا",
    "hero_btn_wa": "واتساب",
    "feat_1": "تفاصيل الضمان حسب الخدمة",
    "feat_2": "صيانة في البيت",
    "feat_3": "فني متخصص حسب الطلب",
    "hero_img_badge": "خدمة مُوضح حسب الخدمةة",
    "about_badge": "مين إحنا؟",
    "about_title": "شركة صيانة أجهزة منزلية شغلها بيتكلم عنها",
    "about_desc_1": "مركز TM لصيانة الأجهزة المنزلية شركة صيانة أجهزة منزلية متخصصة في كل الأجهزة بكل ماركاتها: الغسالات، الثلاجات، الديب فريزر، البوتاجازات، الأفران، السخانات، الميكروويف، الشفاطات، الشاشات، التكييفات والمجففات.",
    "about_desc_2": "نمتلك شبكة صيانة متكاملة، وأكثر من 5 ورش مجهزة، ويتم تأكيد التغطية والموعد عند التواصل لضمان أسرع خدمة.",
    "about_highlight": "وخلينا نقولها من الأول: إحنا مش شركة «صيانة وتحصيل».. هدفنا الحقيقي إن جهازك يفضل شغال أطول مدة ممكنة، وعشان كده بنفضل متابعين حالته معاك حتى بعد ما الصيانة تخلص.",
    "about_img_badge_str": "تفاصيل الضمان حسب الخدمة",
    "about_img_badge_spn": "على كل صيانة",
    "features_badge": "ليه تختارنا؟",
    "features_title": "مش أي حد يلمس أجهزة بيتك.. وده اللي بيفرّقنا",
    "warranty_months": "شهور ضمان<br>رسمي",
    "warranty_badge": "عقد مكتوب",
    "warranty_title": "شروط الضمان حسب الخدمة",
    "warranty_desc": "بيتنقل رسميًا من خدمة العملاء بعد الصيانة، مش مجرد وعد على التليفون.",
    "fcard_title_1": "فني متخصص في جهازك بالظبط",
    "fcard_desc_1": "كل فني شغال على حسب نوع الجهاز والماركة، ومعظم فريقنا خبرته بحسب نوع الجهاز.",
    "fcard_title_2": "توضيح الخطوات",
    "fcard_desc_2": "يتم تأكيد إمكانية الخدمة حسب المنطقة، وفي الساحل الشمالي بأسرع وقت.",
    "fcard_title_3": "إنت صاحب الميعاد",
    "fcard_desc_3": "بتحدد اليوم والساعة اللي تناسبك في المكالمة، والفني بيلتزم بيهم بالدقيقة.",
    "fcard_title_4": "قطع غيار مناسبة حسب الموديل والتوافر",
    "fcard_desc_4": "اسأل عن نوع القطعة ومدى مناسبتها للموديل وتوافرها قبل الاستبدال.",
    "fcard_title_5": "صيانة جوا البيت",
    "fcard_desc_5": "قد تتطلب بعض الأعطال صيانة منزلية أو فحصًا آخر قدام عينك في مكانها بدون بهدلة ونقل للجهاز.",
    "fcard_title_6": "دعم فني متواصل",
    "fcard_desc_6": "فريقنا بيتابع معاك للتأكد إن الجهاز شغال بأعلى كفاءة وجاهزين لأي استفسار.",
    "home_serv_badge": "خدماتنا",
    "home_serv_title": "بنصلّح إيه؟ أي جهاز.. أي ماركة.. أي عطل",
    "home_serv_desc": "فريق صيانة متخصص لكل نوع جهاز، وقطع الغيار المناسبة له – كل اللي عليك تقولنا الجهاز عنده إيه.",
    "serv_washer": "صيانة غسالات",
    "serv_washer_desc": "فول أوتوماتيك وعادية بكل أنواعها، ومجففات الملابس.",
    "serv_fridge": "صيانة ثلاجات",
    "serv_fridge_desc": "أعطال التبريد، شحن الفريون، والديب فريزر.",
    "serv_tv": "صيانة شاشات",
    "serv_tv_desc": "إصلاح البانل، الليدات، ومشاكل الصوت والصورة.",
    "serv_cooker": "أجهزة المطبخ",
    "serv_cooker_desc": "بوتاجازات، أفران، شفاطات، وميكروويف.",
    "serv_deep": "ديب فريزر",
    "serv_ac": "تكييفات",
    "serv_dish": "غسالات أطباق",
    "serv_micro": "ميكروويف",
    "serv_hood": "شفاطات",
    "serv_disp": "مبرد مياه",
    "serv_footer_txt": "مهما كانت ماركة جهازك، هتلاقي عندنا الفني المتخصص فيها بالظبط.",
    "faq_badge": "عندك سؤال؟",
    "faq_title": "الأسئلة الشائعة",
    "faq_desc": "جمعنالك أكتر أسئلة بتجيلنا عشان نجاوبك عليها بكل شفافية ووضوح قبل ما تتصل بينا.",
    "faq_q1": "هل الصيانة بتتم في البيت ولا بتسحبوا الجهاز للورشة؟",
    "faq_a1": "يعتمد ذلك على نوع الجهاز والعطل والمنطقة. تواصل معنا لمعرفة إمكانية الصيانة المنزلية أو الحاجة إلى فحص آخر.",
    "faq_q2": "إيه هي مدة الضمان اللي بتقدموها على الصيانة؟",
    "faq_a2": "تختلف شروط الضمان ونطاقه بحسب العمل وقطع الغيار. اطلب توضيح الشروط قبل الموافقة على الإصلاح.",
    "faq_q3": "هل متوفر قطع غيار مناسبة حسب الموديل والتوافر لكل الماركات؟",
    "faq_a3": "أكيد. إحنا بنتعامل مع موردين متخصصين عشان نوفر قطع الغيار المناسبة حسب الموديل والتوافر لكل الماركات المشهورة.",
    "faq_q4": "الفني بيوصل في خلال وقت قد إيه؟",
    "faq_a4": "بمجرد تأكيد الحجز، الفني بيتواصل معاك وبيوصلك بحسب المواعيد المتاحة أو بحسب المواعيد المتاحة.",
    "loc_hero_badge": "استفسر عن التغطية في منطقتك",
    "loc_hero_title": "بنصلح أجهزتك في بحسب التغطية المتاحة في منطقتك",
    "loc_hero_desc": "ترتيبات الخدمة مجهز للوصول إليك أينما كنت وفي أسرع وقت. اختر محافظتك لمعرفة تفاصيل التغطية وحجز الصيانة الحسب التوافرة لبيتك.",
    "loc_dyn_badge": "تغطية المحافظات",
    "loc_dyn_title": "مركز صيانة وإصلاح الأجهزة في",
    "loc_dyn_desc_1": "أخبرنا بالمحافظة ونوع الجهاز حتى نراجع إمكانية الخدمة.",
    "loc_dyn_desc_2": "مهندسون متخصصون، قطع غيار مناسبة حسب الموديل والتوافر، وتفاصيل ضمان حسب الخدمة على جميع الأعطال.",
    "btn_call": "اتصل:",
    "btn_wa": "احجز واتساب",
    "loc_art_title_1": "صيانة حسب التوافرة لكل أجهزتك المنزلية في",
    "loc_art_p1_1": "نحن نعلم تماماً مدى أهمية الأجهزة المنزلية في حياتك اليومية وتأثير تعطلها على استقرار بيتك، ولذلك وفرنا شبكة ضخمة من السيارات المجهزة المتنقلة التي تغطي كافة أنحاء ومراكز",
    "loc_art_p1_2": "والمناطق المجاورة لها. تختلف إمكانية تقديم الخدمة بحسب موقعك ونوع الجهاز. تواصل معنا لتأكيد التغطية المتاحة.",
    "loc_art_hl_title": "أسطول متحرك يغطي كل شوارع",
    "loc_art_hl_p1": "لا داعي لتحمل عبء ومخاطر نقل جهازك الثقيل وتكاليف الشحن الباهظة. نحن نأتيك في",
    "loc_art_hl_p2": "تختلف خطوات الصيانة من جهاز لآخر؛ نوضح الخيارات المتاحة بعد معرفة نوع الجهاز والعَرَض.",
    "loc_art_title_2": "معلومات مهمة قبل ترتيب الخدمة",
    "loc_art_p2_1": "جهّز نوع الجهاز والموديل ووصف العطل.",
    "loc_art_p2_2": "نحن لا نكتفي فقط بإصلاح العطل السطحي، بل نقوم بفحص شامل للجهاز لضمان عدم وجود أي مشاكل مستقبلية خفية قد تسبب لك الإزعاج لاحقاً. نلتزم بالمواعيد التي تحددها بنفسك بكل دقة، ونقدم لك فاتورة رسمية وشهادة تفاصيل ضمان حسب الخدمةة ومكتوبة حسب شروط الخدمة على قطع الغيار المستبدلة وأجرة اليد، مما يوفر لك راحة البال التامة. خدماتنا متوفرة وجاهزة لتلبية نداءات الطوارئ، لأن راحتكم هي أولويتنا القصوى.",
    "loc_feat_1_title": "التأكد من التغطية",
    "loc_feat_1_desc": "تواصل معنا قبل ترتيب زيارة.",
    "loc_feat_2_title": "تفاصيل ضمان حسب الخدمة وحقيقي",
    "loc_feat_2_desc": "حق محفوظ بضمان ورقي رسمي على كل صيانة تتم داخل",
    "loc_feat_3_title": "قطع غيار مناسبة حسب الموديل والتوافر",
    "loc_feat_3_desc": "يتم توضيح نوع قطعة الغيار وتوافرها للموديل قبل الاستبدال.",
    "loc_side_title": "نصلك في",
    "loc_side_title_2": "أينما كنت",
    "loc_side_desc": "مواعيد الخدمة والتغطية يتم تأكيدها عند التواصل.",
    "loc_side_box_title": "جاهزون لزيارتك الآن",
    "loc_side_box_btn": "احجز موعد صيانة بمدينتك",
    "brands_hero_badge": "أسماء الماركات",
    "brands_hero_title": "الماركات التي نقوم بصيانتها",
    "brands_hero_desc": "أسماء العلامات التالية مذكورة لتسهيل اختيار الماركة فقط، ولا تعني اعتمادًا أو شراكة رسمية من الشركة المصنّعة. توافر الصيانة والقطع يُؤكد حسب الموديل.",
    "brands_search_ph": "ابحث عن ماركة معينة...",
    "brands_filter_all": "الكل",
    "brand_dyn_badge": "صيانة متخصصة",
    "brand_dyn_title_1": "مركز صيانة وإصلاح أجهزة",
    "brand_dyn_title_2": "المتخصص",
    "brand_dyn_desc_1": "يساعدنا تحديد الماركة والموديل على فهم طلبك.",
    "brand_dyn_desc_2": "تواصل معنا لمعرفة خيارات الصيانة المتاحة وقطع الغيار المناسبة بحسب الموديل والتوافر.",
    "brand_art_title_1": "معلومات قبل صيانة أجهزة",
    "brand_art_p1_1": "تعتبر أجهزة",
    "brand_art_p1_2": "من أفضل الأجهزة في السوق المصري وأكثرها تطوراً، حيث تعتمد على تكنولوجيا دقيقة ومعقدة. التدخل من فني غير مختص أو غير متخصص قد يؤدي إلى تلف هذه الأجزاء الحساسة وتكبيد العميل خسائر فادحة. لذلك، نحن نوفر لك مهندسين متخصصين حصرياً في هذه الماركة العريقة لضمان أعلى مستوى من الجودة والدقة في الفحص والتشخيص.",
    "brand_art_hl_title": "صيانة أجهزة",
    "brand_art_hl_title_2": "داخل بيتك بدون نقل",
    "brand_art_hl_p1": "ندرك تماماً في مركزنا المتخصص أن نقل الأجهزة المنزلية الثقيلة يعرضها لمخاطر الصدمات. من هذا المنطلق، وفرنا",
    "brand_art_hl_p2_strong": "خدمة الصيانة المنزلية الحسب التوافرة بنسبة حسب الموديل والتوافر",
    "brand_art_hl_p3": "لجميع أجهزة",
    "brand_art_hl_p4": "سياراتنا المتنقلة مجهزة بالكامل بجميع قطع الغيار المناسبة حسب الموديل والتوافر وأحدث معدات الفحص لتحديد العطل بدقة في ثوانٍ. الفني المختص سيقوم بفك وتركيب وإصلاح الجهاز أمام عينيك.",
    "brand_feat_1_title": "قطع غيار مناسبة حسب الموديل والتوافر حسب الموديل والتوافر",
    "brand_feat_1_desc": "نوفر قطع غيار",
    "brand_feat_1_desc_2": "المناسبة للموديل عند توافرها لضمان العمر الافتراضي الطويل.",
    "brand_feat_2_title": "توضيح شروط الضمان",
    "brand_feat_2_desc": "نقدم شروط الضمان إن توفرت بحسب الخدمة على كافة قطع الغيار وأعمال الصيانة.",
    "brand_art_title_2": "أشهر أجهزة",
    "brand_art_title_3": "التي نقوم بصيانتها",
    "brand_art_p2_1": "أسطولنا جاهز للتعامل مع كافة إصدارات وموديلات",
    "brand_art_p2_2": "ونقدم لها الرعاية الكاملة:",
    "bd_title_washer": "غسالات",
    "bd_desc_washer_1": "صيانة شاملة للغسالات الفول أوتوماتيك، الفوق أوتوماتيك، ومجففات",
    "bd_desc_washer_2": "نعالج مشاكل عدم العصر، تسريب المياه، توقف الكارتة، واهتزاز الغسالة القوي.",
    "bd_title_fridge": "ثلاجات ومبردات",
    "bd_desc_fridge_1": "إصلاح جميع ثلاجات",
    "bd_desc_fridge_2": "النوفروست، الديفروست والديب فريزر. معالجة تسريب الفريون وتغيير المواتير.",
    "bd_title_tv": "شاشات تلفزيون",
    "bd_desc_tv": "يمكن الاستفسار عن أعطال الصورة والصوت والتشغيل بحسب الموديل.",
    "bd_title_cooker": "بوتاجازات وميكروويف",
    "bd_desc_cooker": "صيانة أجهزة المطبخ الحساسة مثل الميكروويف وأعطال البوتاجازات من تسريب الغاز.",
    "brand_faults_title": "الأعطال الشائعة لأجهزة",
    "brand_faults_title_2": "وكيف نعالجها",
    "brand_faults_desc": "بفضل خبرتنا الطويلة والمستمرة في العمل الميداني، جمعنا لكم أشهر الأعطال التي قد تواجهكم مع أجهزتكم، ونحن جاهزون لحلها بعد تأكيد التوافر في مكانك:",
    "bf_card_title_1": "أعطال الثلاجات والديب فريزر",
    "bf_card_desc_1": "توقف التبريد المفاجئ، تراكم الثلج في موديلات النوفروست، تسريب المياه أسفل الأدراج. نقوم بشحن الفريون وتغيير التايمر بعد تأكيد التوافر.",
    "bf_card_title_2": "أعطال الغسالات",
    "bf_card_desc_2": "توقف الغسالة عن العصر، عدم سحب أو طرد المياه، واهتزاز الغسالة بعنف أثناء دورة التنشيف. نمتلك الحل السريع بتغيير الطلمبة والمساعدين.",
    "bf_card_title_3": "أعطال الشاشات",
    "bf_card_desc_3": "قد تشمل الأعراض شاشة سوداء أو خطوطًا عمودية. يلزم تحديد السبب بالفحص قبل اقتراح الإصلاح.",
    "bf_card_title_4": "أعطال التكييفات",
    "bf_card_desc_4": "تساقط المياه داخل الغرفة، ضعف التبريد المستمر رغم عمل المروحة. نقوم بغسيل التكييف وشحن الفريون ليعود التبريد قوياً.",
    "brand_side_title": "من داخل أعمالنا في",
    "brand_side_desc": "نلتزم بأعلى معايير الجودة أثناء فحص وصيانة أجهزتكم.",
    "brand_side_box_title": "جاهزون لصيانة جهازك الآن",
    "brand_side_box_btn": "احجز موعد صيانة",
    "about_hero_badge": "كيان متكامل",
    "about_hero_title": "مركز TM لصيانة الأجهزة المنزلية",
    "about_hero_desc": "نحن لا نقدم مجرد خدمة صيانة، بل نقدم راحة البال والأمان لكل أسرة مصرية، من خلال إعادة الحياة لأجهزتك بضمان حقيقي واحترافية لا تقارن.",
    "about_sec_badge": "تاريخنا وبدايتنا",
    "about_sec_title": "كيان مصري بُني على الشفافية والاحترافية",
    "about_sec_p1": "يعرض هذا الموقع معلومات عن أنواع الأجهزة التي يمكن الاستفسار عن صيانتها ووسائل التواصل مع المركز.",
    "about_sec_p2": "تختلف إمكانية الخدمة ومواعيدها وقطع الغيار بحسب الجهاز والموديل والمنطقة؛ تواصل معنا لتأكيد التفاصيل قبل ترتيب الزيارة.",
    "mv_mission_title": "مهمتنا",
    "mv_mission_desc": "تقديم حلول صيانة سريعة، آمنة، ومُوضح حسب الخدمةة، تطيل من العمر الافتراضي لأجهزتك المنزلية وتوفر عليك تكاليف شراء أجهزة جديدة.",
    "mv_vision_title": "رؤيتنا",
    "mv_vision_desc": "تقديم معلومات واضحة عن وسائل التواصل وخيارات الصيانة المتاحة.",
    "prin_badge": "مبادئنا",
    "prin_title": "عهدنا لكل عميل يدخلنا بيته",
    "prin_card_1_title": "الشفافية في التسعير",
    "prin_card_1_desc": "لا توجد رسوم خفية. الفني يقوم بالفحص، ثم يخبرك بتكلفة الصيانة وقطع الغيار، ولا يبدأ العمل إلا بعد موافقتك التامة.",
    "prin_card_2_title": "أمان ونظافة بيتك",
    "prin_card_2_desc": "فريقنا يتمتع بأعلى درجات السلوك المهني والأخلاقي. نحافظ على نظافة مكان العمل داخل منزلك قبل وبعد إتمام الصيانة.",
    "prin_card_3_title": "قطع غيار مناسبة حسب الموديل والتوافر فقط",
    "prin_card_3_desc": "اسأل عن نوع قطعة الغيار ومدى مناسبتها للموديل وتوافرها قبل الاستبدال.",
    "hw_badge": "رحلة الصيانة",
    "hw_title": "كيف تتم الصيانة من المكالمة وحتى الضمان؟",
    "hw_step_1_title": "الاتصال وحجز الموعد",
    "hw_step_1_desc": "تتواصل معنا عبر الهاتف أو الواتساب، يقوم فريق خدمة العملاء بتسجيل بياناتك ونوع العطل وتحديد الموعد الذي يناسبك.",
    "hw_step_2_title": "الزيارة والفحص الدقيق",
    "hw_step_2_desc": "يصلك المهندس المختص في الموعد المحدد، يقوم بفحص الجهاز بأحدث الأجهزة لتحديد العطل بدقة وإخبارك بالتكلفة.",
    "hw_step_3_title": "الصيانة الحسب التوافرة بالمنزل",
    "hw_step_3_desc": "بمجرد موافقتك، يبدأ الفني في تغيير القطع التالفة وإصلاح الجهاز أمام عينيك في وقت قياسي وبدون إحداث فوضى.",
    "hw_step_4_title": "تسليم الضمان والمتابعة",
    "hw_step_4_desc": "بعد تجربة الجهاز والتأكد من كفاءته، تستلم فاتورة وشهادة تفاصيل ضمان حسب الخدمةة بمدة حسب شروط الخدمة، ويتواصل معك الدعم الفني لاحقاً للتأكد من رضاك.",
    "cs_badge": "نحن هنا من أجلك",
    "cs_title": "دايماً معاك.. تواصل معنا لمعرفة مواعيد الخدمة",
    "cs_desc": "عطل مفاجئ في منتصف الليل؟ الثلاجة فصلت والأكل سيفسد؟ لا مشكلة أبداً. تواصل معنا لمعرفة أوقات العمل والتغطية المتاحة.",
    "cs_btn": "اتصل بنا الآن: 01127893459",
    "serv_hero_badge": "خدماتنا",
    "serv_hero_title": "كل الأجهزة، كل الماركات.. فني متخصص لكل جهاز",
    "serv_hero_desc": "أي جهاز في بيتك ممكن يتعب في أي لحظة.. والمهم وقتها تلاقي شركة تعرف بتعمل إيه بالظبط.",
    "serv_feat_1": "في متخصص لكل جهاز",
    "serv_feat_2": "صيانة في البيت",
    "serv_feat_3": "تفاصيل الضمان حسب الخدمة",
    "serv_det_badge": "بنصلّح إيه؟",
    "serv_det_title": "اختار جهازك.. واعرف بنعالج فيه إيه",
    "serv_washer_desc_long": "فول أوتوماتيك وعادية بكل أنواعها وماركاتها.",
    "serv_link": "تفاصيل صيانة الجهاز",
    "serv_fridge_desc_long": "بنحل مشاكل ضعف التبريد وتراكم الثلج وشحن الفريون.",
    "serv_deep_desc_long": "أفقي ورأسي، بنوفر صيانة حسب التوافرة تحمي أكلك وتجميده.",
    "serv_ac_desc_long": "اسبليت وشباك، غسيل، شحن فريون، وتصليح أعطال الكباس.",
    "serv_tv_desc_long": "LED, LCD, Smart. إصلاح البانل وتغيير الليدات والبوردة.",
    "serv_cooker_desc_long": "بنعالج كل مشاكل تسريب الغاز وضعف النار والإشعال الذاتي.",
    "serv_micro_desc_long": "تصليح أعطال التسخين، لوحة التاتش، وطبق الميكروويف.",
    "serv_heater_desc_long": "غاز وكهرباء، حلول حسب التوافرة لضعف التسخين وتلف الرداخ.",
    "serv_dish_desc_long": "حل مشاكل عدم سحب وطرد المياه وضعف التنظيف.",
    "serv_dryer_desc_long": "إصلاح أعطال التنشيف، السخانات الداخلية، وتوقف الحلة.",
    "serv_hood_desc_long": "شفاطات المطبخ والمسطحة، تنظيف وإصلاح الموتور.",
    "serv_disp_desc_long": "تصليح تسريب المياه، وضعف تبريد أو تسخين الديسبنسر.",
    "serv_vacuum_desc_long": "حل مشاكل ضعف الشفط وصوت الموتور العالي.",
    "serv_vacuum": "صيانة مكانس كهربائية",
    "dev_dyn_status": "تواصل معنا لمعرفة مواعيد الخدمة",
    "dev_dyn_faults": "أشهر الأعطال اللي بنعالجها:",
    "dev_dyn_extras": "خدمات إضافية بنقدمها للجهاز ده:",
    "dev_dyn_faqs": "أسئلة بتوصلنا كل يوم:",
    "dyn_stat_1": "ماركة بنصلحها",
    "dyn_stat_2": "وصول سريع",
    "dyn_stat_3": "نخلص من أول زيارة",
    "dyn_stat_4": "شهور ضمان مكتوب",
    "dyn_badge_1": "كشف وسعر قبل الشغل",
    "dyn_badge_2": "ومبنبداش غير لما توافق",
    "db_stat_1": "قطع غيار مناسبة حسب الموديل والتوافر",
    "db_badge_1": "تفاصيل ضمان حسب الخدمة",
    "db_badge_2": "على جميع قطع الغيار",
    "book_title": "احجز موعد صيانة الآن",
    "book_desc": "املأ البيانات دي وهنتواصل معاك بعد تأكيد التوافر لتأكيد الميعاد",
    "book_label_name": "الاسم بالكامل",
    "book_label_phone": "رقم التليفون (للتواصل)",
    "book_label_device": "إيه الجهاز اللي محتاج صيانة؟",
    "book_opt_device": "اختر الجهاز...",
    "opt_washer": "غسالة ملابس",
    "opt_fridge": "ثلاجة",
    "opt_ac": "تكييف",
    "opt_tv": "شاشة تلفزيون",
    "opt_deep": "ديب فريزر",
    "opt_cooker": "بوتاجاز / فرن",
    "opt_heater": "سخان",
    "opt_dish": "غسالة أطباق",
    "opt_micro": "ميكروويف",
    "opt_dryer": "مجفف ملابس",
    "opt_hood": "شفاط",
    "opt_vacuum": "مكنسة كهربائية",
    "opt_disp": "مبرد مياه (ديسبنسر)",
    "opt_other": "جهاز آخر",
    "book_label_brand": "الماركة",
    "book_opt_brand": "اختر الماركة...",
    "book_label_gov": "المحافظة",
    "book_opt_gov": "اختر المحافظة...",
    "gov_cairo": "القاهرة",
    "gov_giza": "الجيزة",
    "gov_alex": "الإسكندرية",
    "gov_sahel": "الساحل الشمالي",
    "gov_dak": "الدقهلية",
    "gov_shark": "الشرقية",
    "gov_ghar": "الغربية",
    "gov_kaly": "القليوبية",
    "gov_meno": "المنوفية",
    "gov_beh": "البحيرة",
    "gov_kafr": "كفر الشيخ",
    "gov_dam": "دمياط",
    "gov_port": "بورسعيد",
    "gov_ism": "الإسماعيلية",
    "gov_suez": "السويس",
    "gov_mat": "مطروح",
    "gov_fay": "الفيوم",
    "gov_beni": "بني سويف",
    "gov_minya": "المنيا",
    "gov_asyut": "أسيوط",
    "gov_sohag": "سوهاج",
    "gov_qena": "قنا",
    "gov_luxor": "الأقصر",
    "gov_aswan": "أسوان",
    "gov_red": "البحر الأحمر",
    "gov_wadi": "الوادي الجديد",
    "gov_nsinai": "شمال سيناء",
    "gov_ssinai": "جنوب سيناء",
    "book_label_area": "المنطقة",
    "book_opt_area": "اختر المنطقة...",
    "book_label_street": "الشارع (ابحث عن شارعك)",
    "book_label_address": "العنوان بالتفصيل",
    "book_label_desc": "وصف العطل",
    "book_btn_submit": "إرسال الطلب الآن",
    "footer_about": "أقرب شركة صيانة أجهزة منزلية لحد باب بيتك. صيانة أجهزتك المنزلية لكل الماركات بحسب التغطية المتاحة في منطقتك، مع توضيح تفاصيل الضمان قبل الإصلاح وفنيين متخصصين.",
    "footer_serv_title": "خدمات الصيانة",
    "footer_brands_title": "الماركات",
    "footer_contact_title": "تواصل معنا",
    "footer_loc_1": "خدمة متنقلة تصلك لباب البيت",
    "footer_loc_2": "(نخدم الساحل الشمالي والتغطية المتاحة حسب المنطقة)",
    "footer_hotline": "الخط الساخن:",
    "footer_wa": "واتساب:",
    "chat_header": "مساعد الصيانة",
    "chat_welcome": "أهلاً بك! اذكر نوع الجهاز والعطل، وسأرشدك إلى وسيلة التواصل المناسبة. هذه إرشادات عامة وليست تشخيصًا فنيًا.",
    "chat_placeholder": "اكتب رسالتك...",
    "exit_title": "لحظة من فضلك! 🎁",
    "exit_desc_1": "استفد بـ",
    "exit_desc_2": "أولوية الحجز",
    "exit_desc_3": "والصيانة الحسب التوافرة لو حجزت دلوقتي.",
    "exit_btn": "احجز موعدك الآن"
  },
  "en": {
    "offline_title": "You are offline!",
    "offline_desc": "Please check your internet connection to browse our services.",
    "offline_btn": "Retry",
    "brand_name_1": "TM Home Appliance Repair",
    "nav_home": "Home",
    "nav_services": "Services",
    "nav_brands": "Brands",
    "nav_locations": "Coverage",
    "nav_about": "About Us",
    "nav_book": "Book Now",
    "search_placeholder": "Search for a service, brand, or city...",
    "search_popular": "Popular Searches: ",
    "search_tag_1": "Fridge Repair",
    "search_tag_2": "LG Washers",
    "search_tag_3": "North Coast",
    "loader_text": "TM Home Appliance Repair",
    "hero_badge": "Contact us for service availability",
    "hero_title": "The Closest Home Appliance Repair to Your Doorstep in Egypt",
    "hero_desc": "Washing machine stopped? AC not cooling? TV screen went black? One call and our English speaking technician will fix it in your home on the subject to appointment availability with a specialized warranty.",
    "hero_btn_book": "Book Repair Now",
    "hero_btn_call": "Call Us",
    "hero_btn_wa": "WhatsApp",
    "feat_1": "Warranty terms details on request",
    "feat_2": "In-Home Repair",
    "feat_3": "Confirm availability before booking",
    "hero_img_badge": "Guaranteed Service",
    "about_badge": "Who Are We?",
    "about_title": "A Home Appliance Repair Company That Speaks Through Its Work",
    "about_desc_1": "TM Home Appliance Repair Center specializes in repairing all home appliances across all brands: Washers, Refrigerators, Deep Freezers, Cookers, Ovens, Heaters, Microwaves, Hoods, TVs, ACs, and Dryers.",
    "about_desc_2": "We have an integrated maintenance network, over 5 equipped workshops, and a fleet of vehicles to deliver our technicians to your doorstep anywhere in Egypt for the fastest service.",
    "about_highlight": "Let's be clear: We are not just a 'repair and collect' company. Our real goal is to keep your appliance running for as long as possible, which is why we follow up with you even after the repair is done.",
    "about_img_badge_str": "Warranty terms details on request",
    "about_img_badge_spn": "On Every Repair",
    "features_badge": "Why Choose Us?",
    "features_title": "Not Just Anyone Can Touch Your Appliances.. That's Our Difference",
    "warranty_months": "Months Official<br>Warranty terms",
    "warranty_badge": "Written Contract",
    "warranty_title": "Real Warranty terms details on request",
    "warranty_desc": "Transferred officially from customer service after the repair, not just a promise on the phone.",
    "fcard_title_1": "Specialized Tech for Your Exact Appliance",
    "fcard_desc_1": "Every technician works according to appliance type and brand. Most of our team has over 5 years of experience.",
    "fcard_title_2": "Clarify the steps",
    "fcard_desc_2": "Our fleet is ready to reach you anywhere, including the North Coast in record time.",
    "fcard_title_3": "You Choose the Time",
    "fcard_desc_3": "You set the day and time that suits you, and our technician arrives right on the dot.",
    "fcard_title_4": "Original Spare Parts",
    "fcard_desc_4": "Ask which part is suitable and available for your model before replacement.",
    "fcard_title_5": "In-Home Maintenance",
    "fcard_desc_5": "Ask whether an at-home visit is available for your appliance and area.",
    "fcard_title_6": "Continuous Tech Support",
    "fcard_desc_6": "Our team follows up to ensure your appliance is working perfectly and is ready for any inquiry.",
    "home_serv_badge": "Our Services",
    "home_serv_title": "What Do We Repair? Any Appliance.. Any Brand.. Any Fault",
    "home_serv_desc": "A specialized maintenance team for every appliance type and its specific spare parts - just tell us what’s wrong.",
    "serv_washer": "Washing Machines",
    "serv_washer_desc": "Full automatic and top load of all types and brands, including dryers.",
    "serv_fridge": "Refrigerators",
    "serv_fridge_desc": "Cooling issues, Freon charging, and Deep Freezers.",
    "serv_tv": "TV Screens",
    "serv_tv_desc": "Panel repair, LED replacement, and AV issues.",
    "serv_cooker": "Kitchen Appliances",
    "serv_cooker_desc": "Cookers, Ovens, Hoods, and Microwaves.",
    "serv_deep": "Deep Freezers",
    "serv_ac": "Air Conditioners",
    "serv_dish": "Dishwashers",
    "serv_micro": "Microwaves",
    "serv_hood": "Range Hoods",
    "serv_disp": "Water Dispensers",
    "serv_footer_txt": "Whatever the brand of your appliance, you'll find the right specialized technician with us.",
    "faq_badge": "Have a Question?",
    "faq_title": "Frequently Asked Questions",
    "faq_desc": "We've gathered the most common questions to answer them transparently before you even call.",
    "faq_q1": "Is the repair done at home or do you take the appliance to the workshop?",
    "faq_a1": "This depends on the appliance, issue and area. Contact us to confirm whether an at-home visit is available.",
    "faq_q2": "What is the warranty period for the repairs?",
    "faq_a2": "Warranty scope and terms vary by work and parts. Ask for clarification before approving repairs.",
    "faq_q3": "Are original spare parts available for all brands?",
    "faq_a3": "Absolutely. We deal with authorized suppliers to provide original spare parts for all well-known brands.",
    "faq_q4": "How long does it take for the technician to arrive?",
    "faq_a4": "Once the booking is confirmed, the technician contacts you and arrives on the subject to appointment availability or based on available appointment times at most.",
    "loc_hero_badge": "Comprehensive Coverage Across Egypt",
    "loc_hero_title": "We Repair Your Appliances Anywhere in Egypt",
    "loc_hero_desc": "Our fleet is equipped to reach you wherever you are, as fast as possible. Choose your governorate to view coverage details and book immediate home maintenance.",
    "loc_dyn_badge": "Governorate Coverage",
    "loc_dyn_title": "Appliance Maintenance & Repair Center in",
    "loc_dyn_desc_1": "Tell us the area and appliance type so we can review service availability.",
    "loc_dyn_desc_2": "Expert engineers, suitable parts based on model availability, and specialized warranty on all repairs.",
    "btn_call": "Call:",
    "btn_wa": "Book via WhatsApp",
    "loc_art_title_1": "Immediate Repair for All Home Appliances in",
    "loc_art_p1_1": "We fully understand the importance of home appliances in your daily life. That's why we provide a massive fleet of mobile vehicles covering all areas of",
    "loc_art_p1_2": "and its surroundings. Our top engineers are ready to move immediately, equipped with the latest diagnostic tools and suitable parts based on model availability to fix the issue on the first visit without delay.",
    "loc_art_hl_title": "Mobile Fleet Covering Every Street in",
    "loc_art_hl_p1": "No need to bear the burden and risks of transporting heavy appliances. We come to you in",
    "loc_art_hl_p2": "as quickly as possible. Whether it's a sudden fault in a fridge, washer, AC, or TV, we provide the ultimate solution safely, right in front of you.",
    "loc_art_title_2": "Why Are We the #1 Repair Center in",
    "loc_art_p2_1": "Our 15+ years of experience make us the safest choice for the residents of",
    "loc_art_p2_2": "We don't just do surface repairs; we perform a comprehensive check to ensure no hidden issues remain. We strictly respect the appointments you set, providing official invoices and a warranty terms confirmed before service.",
    "loc_feat_1_title": "Confirm coverage",
    "loc_feat_1_desc": "Contact us before arranging a visit.",
    "loc_feat_2_title": "Specialized Real Warranty terms",
    "loc_feat_2_desc": "Guaranteed rights with official paperwork for every repair in",
    "loc_feat_3_title": "Original Spare Parts",
    "loc_feat_3_desc": "Using only the highest quality approved parts to extend your appliance's lifespan.",
    "loc_side_title": "Reaching You in",
    "loc_side_title_2": "Wherever You Are",
    "loc_side_desc": "Service hours and coverage are confirmed through direct contact.",
    "loc_side_box_title": "Ready to Visit You Now",
    "loc_side_box_btn": "Book Maintenance in Your City",
    "brands_hero_badge": "Authorized Agencies",
    "brands_hero_title": "Brands We Repair",
    "brands_hero_desc": "Brand names are shown to help identify your appliance only. They do not imply official authorization or manufacturer partnership. Service and parts availability depend on the model.",
    "brands_search_ph": "Search for a specific brand...",
    "brands_filter_all": "All",
    "brand_dyn_badge": "Specialized Maintenance",
    "brand_dyn_title_1": "Repair information for",
    "brand_dyn_title_2": "Appliance Repair Center",
    "brand_dyn_desc_1": "The appliance brand and model help us understand your request.",
    "brand_dyn_desc_2": "Contact us to discuss maintenance options and parts available for your model.",
    "brand_art_title_1": "Before servicing appliances",
    "brand_art_p1_1": "",
    "brand_art_p1_2": "appliances are among the best and most advanced in the Egyptian market, utilizing complex technology. Intervention by unauthorized technicians can cause severe damage. Therefore, we provide engineers specialized exclusively in this brand.",
    "brand_art_hl_title": "Repairing",
    "brand_art_hl_title_2": "Appliances At Home Without Transport",
    "brand_art_hl_p1": "We understand that transporting heavy appliances risks shocks and scratches. Thus, we provide a",
    "brand_art_hl_p2_strong": "حسب الموديل والتوافر In-Home Maintenance Service",
    "brand_art_hl_p3": "for all",
    "brand_art_hl_p4": "appliances. Our mobile vans are fully equipped to diagnose and repair your device on the spot.",
    "brand_feat_1_title": "حسب الموديل والتوافر Original Spare Parts",
    "brand_feat_1_desc": "Providing original",
    "brand_feat_1_desc_2": "parts straight from the manufacturer.",
    "brand_feat_2_title": "Specialized Written Warranty terms",
    "brand_feat_2_desc": "A genuine warranty terms confirmed before service on all parts and labor.",
    "brand_art_title_2": "Popular",
    "brand_art_title_3": "Appliances We Repair",
    "brand_art_p2_1": "Our fleet handles all",
    "brand_art_p2_2": "models, old and new:",
    "bd_title_washer": "Washers",
    "bd_desc_washer_1": "Comprehensive repair for automatic, top-load, and",
    "bd_desc_washer_2": "dryers. Handling spin failures, leaks, and intense vibrations.",
    "bd_title_fridge": "Refrigerators",
    "bd_desc_fridge_1": "Repairing all",
    "bd_desc_fridge_2": "No-Frost, Defrost, and Deep Freezers. Fixing Freon leaks and changing motors.",
    "bd_title_tv": "TV Screens",
    "bd_desc_tv": "Ask about picture, sound and power issues for your appliance model.",
    "bd_title_cooker": "Cookers & Microwaves",
    "bd_desc_cooker": "Delicate kitchen appliance repairs, fixing microwaves and cooker gas leaks.",
    "brand_faults_title": "Common Faults in",
    "brand_faults_title_2": "And How We Fix Them",
    "brand_faults_desc": "Through extensive field experience, we have compiled the most common issues you might face, and we are ready to fix them on the spot:",
    "bf_card_title_1": "Fridge & Deep Freezer Faults",
    "bf_card_desc_1": "Sudden cooling stops, ice buildup in No-Frost models, and water leaks. We recharge Freon and replace timers instantly.",
    "bf_card_title_2": "Washing Machine Faults",
    "bf_card_desc_2": "Spinning failures, water drain issues, and violent shaking. We quickly replace pumps and shock absorbers.",
    "bf_card_title_3": "TV Screen Faults",
    "bf_card_desc_3": "Symptoms may include a black screen or vertical lines. Inspection is needed before recommending a repair.",
    "bf_card_title_4": "Air Conditioner Faults",
    "bf_card_desc_4": "Water dripping indoors, weak cooling. We perform deep cleaning and Freon charging to restore freezing power.",
    "brand_side_title": "Inside Our Work With",
    "brand_side_desc": "Adhering to the highest quality standards during inspection and repair.",
    "brand_side_box_title": "Ready to Fix Your Appliance Now",
    "brand_side_box_btn": "Book Maintenance Appointment",
    "about_hero_badge": "Integrated Entity",
    "about_hero_title": "Over 15 Years of Trust in Home Appliance Repair",
    "about_hero_desc": "We don't just offer repairs; we provide peace of mind and safety for every Egyptian family, restoring life to your appliances with real warranties.",
    "about_sec_badge": "Our History & Beginning",
    "about_sec_title": "An Egyptian Entity Built on Transparency and Professionalism",
    "about_sec_p1": "This site explains the appliance types that can be discussed with the center and the available contact options.",
    "about_sec_p2": "Service availability, timing and parts depend on appliance, model and location. Contact us to confirm details before arranging a visit.",
    "mv_mission_title": "Our Mission",
    "mv_mission_desc": "To provide fast, safe, and guaranteed maintenance solutions that extend the lifespan of your home appliances and save you the cost of buying new ones.",
    "mv_vision_title": "Our Vision",
    "mv_vision_desc": "Provide clear information about contact options and available maintenance services.",
    "prin_badge": "Our Principles",
    "prin_title": "Our Promise to Every Customer",
    "prin_card_1_title": "Transparent Pricing",
    "prin_card_1_desc": "No hidden fees. The tech inspects, informs you of the cost, and only begins after your full approval.",
    "prin_card_2_title": "Safety & Cleanliness",
    "prin_card_2_desc": "Our team maintains high ethical standards, keeping your home clean before and after the repair.",
    "prin_card_3_title": "Parts based on availability Only",
    "prin_card_3_desc": "Ask which part is suitable for your model and whether it is available before replacement.",
    "hw_badge": "The Maintenance Journey",
    "hw_title": "How is Maintenance Done From Call to Warranty terms?",
    "hw_step_1_title": "Call & Book",
    "hw_step_1_desc": "Contact us via Phone or WhatsApp. Customer service records your details and sets a suitable appointment.",
    "hw_step_2_title": "Visit & Inspection",
    "hw_step_2_desc": "The specialized engineer arrives on time, inspects with modern tools, and quotes the exact cost.",
    "hw_step_3_title": "Immediate Home Repair",
    "hw_step_3_desc": "Upon approval, the technician replaces faulty parts right before your eyes without causing a mess.",
    "hw_step_4_title": "Warranty terms & Follow-Up",
    "hw_step_4_desc": "After testing, you receive a specialized warranty terms confirmed before service invoice. Tech support follows up to ensure satisfaction.",
    "cs_badge": "We Are Here For You",
    "cs_title": "Always With You.. service availability confirmed by contact",
    "cs_desc": "Midnight breakdown? Fridge stopped and food might spoil? No problem. Our customer service is ready to direct the nearest van to you immediately.",
    "cs_btn": "Call Us Now: 01127893459",
    "serv_hero_badge": "Our Services",
    "serv_hero_title": "All Appliances, All Brands.. A Specialist for Each",
    "serv_hero_desc": "Any appliance can break down anytime.. What matters is finding a company that knows exactly what to do.",
    "serv_feat_1": "Specialist for Each Appliance",
    "serv_feat_2": "In-Home Maintenance",
    "serv_feat_3": "Warranty terms details on request",
    "serv_det_badge": "What Do We Fix?",
    "serv_det_title": "Choose Your Appliance.. See What We Treat",
    "serv_washer_desc_long": "Automatic and standard washers of all types and brands.",
    "serv_link": "Appliance Repair Details",
    "serv_fridge_desc_long": "Fixing weak cooling, ice buildup, and Freon charging.",
    "serv_deep_desc_long": "Chest and upright freezers, immediate repair.",
    "serv_ac_desc_long": "Split and window ACs, washing, charging, and compressor fixes.",
    "serv_tv_desc_long": "LED, LCD, Smart. Panel repair and LED replacements.",
    "serv_cooker_desc_long": "Fixing gas leaks, weak flames, and auto-ignition.",
    "serv_micro_desc_long": "Fixing heating issues, touchpads, and microwave plates.",
    "serv_heater_desc_long": "Gas and electric, immediate solutions for weak heating.",
    "serv_dish_desc_long": "Solving drain issues and poor dish cleaning.",
    "serv_dryer_desc_long": "Fixing drying faults, internal heaters, and drum stops.",
    "serv_hood_desc_long": "Kitchen and built-in hoods, motor cleaning and repair.",
    "serv_disp_desc_long": "Fixing water leaks, weak cooling or heating.",
    "serv_vacuum_desc_long": "Fixing weak suction and loud motor noises.",
    "serv_vacuum": "Vacuum Cleaners",
    "dev_dyn_status": "Customer Service is Online - service availability confirmed by contact",
    "dev_dyn_faults": "Most Common Faults We Treat:",
    "dev_dyn_extras": "Additional Services For This Appliance:",
    "dev_dyn_faqs": "Questions We Receive Daily:",
    "dyn_stat_1": "Brands Repaired",
    "dyn_stat_2": "Fast Arrival",
    "dyn_stat_3": "Fixed on First Visit",
    "dyn_stat_4": "Months Written Warranty terms",
    "dyn_badge_1": "Inspection & Pricing First",
    "dyn_badge_2": "We don't start until you agree",
    "db_stat_1": "Parts based on availability",
    "db_badge_1": "Specialized Warranty terms",
    "db_badge_2": "On all spare parts",
    "book_title": "Book Maintenance Appointment Now",
    "book_desc": "Fill in the details and we'll contact you immediately to confirm.",
    "book_label_name": "Full Name",
    "book_label_phone": "Phone Number",
    "book_label_device": "Which appliance needs repair?",
    "book_opt_device": "Choose Appliance...",
    "opt_washer": "Washing Machine",
    "opt_fridge": "Refrigerator",
    "opt_ac": "Air Conditioner",
    "opt_tv": "TV Screen",
    "opt_deep": "Deep Freezer",
    "opt_cooker": "Cooker / Oven",
    "opt_heater": "Water Heater",
    "opt_dish": "Dishwasher",
    "opt_micro": "Microwave",
    "opt_dryer": "Clothes Dryer",
    "opt_hood": "Range Hood",
    "opt_vacuum": "Vacuum Cleaner",
    "opt_disp": "Water Dispenser",
    "opt_other": "Other Appliance",
    "book_label_brand": "Brand",
    "book_opt_brand": "Choose Brand...",
    "book_label_gov": "Governorate",
    "book_opt_gov": "Choose Governorate...",
    "gov_cairo": "Cairo",
    "gov_giza": "Giza",
    "gov_alex": "Alexandria",
    "gov_sahel": "North Coast",
    "gov_dak": "Dakahlia",
    "gov_shark": "Al Sharqia",
    "gov_ghar": "Gharbia",
    "gov_kaly": "Qalyubia",
    "gov_meno": "Monufia",
    "gov_beh": "Beheira",
    "gov_kafr": "Kafr El Sheikh",
    "gov_dam": "Damietta",
    "gov_port": "Port Said",
    "gov_ism": "Ismailia",
    "gov_suez": "Suez",
    "gov_mat": "Matrouh",
    "gov_fay": "Faiyum",
    "gov_beni": "Beni Suef",
    "gov_minya": "Minya",
    "gov_asyut": "Asyut",
    "gov_sohag": "Sohag",
    "gov_qena": "Qena",
    "gov_luxor": "Luxor",
    "gov_aswan": "Aswan",
    "gov_red": "Red Sea",
    "gov_wadi": "New Valley",
    "gov_nsinai": "North Sinai",
    "gov_ssinai": "South Sinai",
    "book_label_area": "Area",
    "book_opt_area": "Choose Area...",
    "book_label_street": "Street (Search for your street)",
    "book_label_address": "Detailed Address",
    "book_label_desc": "Fault Description",
    "book_btn_submit": "Submit Request Now",
    "footer_about": "The closest home appliance repair company to your door. Repairing all brands across Egypt with a warranty terms confirmed before service and expert technicians.",
    "footer_serv_title": "Maintenance Services",
    "footer_brands_title": "Brands",
    "footer_contact_title": "Contact Us",
    "footer_loc_1": "Mobile service reaching your door",
    "footer_loc_2": "(Serving North Coast & all of Egypt)",
    "footer_hotline": "Hotline:",
    "footer_wa": "WhatsApp:",
    "chat_header": "Maintenance Helper",
    "chat_welcome": "Welcome! Tell me the appliance type and issue. I can guide you to a contact option; this is general guidance, not a technical diagnosis.",
    "chat_placeholder": "Type your message...",
    "exit_title": "Wait a moment! 🎁",
    "exit_desc_1": "Enjoy",
    "exit_desc_2": "Priority Booking",
    "exit_desc_3": "and immediate repair if you book now.",
    "exit_btn": "Book Your Appointment Now"
  }
};

Object.assign(translations.ar, { serv_dryer: 'مجففات', serv_heater: 'سخانات' });
Object.assign(translations.en, { serv_dryer: 'Clothes dryers', serv_heater: 'Water heaters' });
// Reviewed bilingual copy: remove unverified service guarantees and fabricated metrics.
Object.assign(translations.ar, {"brand_name_1": "مركز TM لصيانة الأجهزة المنزلية", "loader_text": "صيانة الأجهزة المنزلية", "hero_badge": "تواصل مباشر لتحديد الخدمة المناسبة", "hero_title": "صيانة الأجهزة المنزلية والكهربائية مع مركز TM", "hero_desc": "احكِ لنا نوع الجهاز والماركة والعطل، وسنساعدك في معرفة الخطوة التالية وخيارات الخدمة المتاحة.", "hero_btn_book": "اطلب صيانة", "hero_btn_call": "اتصل بنا", "hero_btn_wa": "واتساب", "feat_1": "تحديد تفاصيل الجهاز", "feat_2": "التواصل قبل الإصلاح", "feat_3": "تأكيد التوافر قبل الحجز", "hero_img_badge": "خدمة حسب نوع الجهاز", "about_badge": "من نحن", "about_title": "مركز TM لصيانة الأجهزة المنزلية", "about_desc_1": "نستقبل طلبات صيانة الأجهزة المنزلية والكهربائية، ونساعدك في تحديد المعلومات اللازمة عن الجهاز والعطل قبل ترتيب الخطوة التالية.", "about_desc_2": "اذكر نوع الجهاز والماركة ووصف المشكلة، واسأل عن إمكانية الخدمة في منطقتك والتكلفة المتوقعة قبل الموافقة على الإصلاح.", "about_highlight": "هدفنا أن تكون تفاصيل الخدمة واضحة لك قبل اتخاذ قرار الإصلاح.", "about_img_badge_str": "توضيح الخطوات", "about_img_badge_spn": "قبل الإصلاح", "features_badge": "مبادئ الخدمة", "features_title": "خطوات واضحة قبل بدء الصيانة", "warranty_months": "تفاصيل<br>الخدمة", "warranty_badge": "قبل الموافقة", "warranty_title": "اسأل عن شروط الضمان", "warranty_desc": "تختلف الشروط بحسب الخدمة والعمل وقطع الغيار؛ اطلب توضيحها قبل الموافقة.", "fcard_title_1": "تحديد نوع الجهاز", "fcard_desc_1": "يساعدنا تحديد الجهاز والماركة على فهم طلب الصيانة.", "fcard_title_2": "توضيح الخطوات", "fcard_desc_2": "اسأل عن الفحص والتكلفة قبل الموافقة على أي إصلاح.", "fcard_title_3": "خيارات واضحة", "fcard_desc_3": "نوضح الخيارات المتاحة بحسب العطل والموديل.", "fcard_title_4": "تنسيق موعد", "fcard_desc_4": "يتم تنسيق الموعد بعد التأكد من إمكانية تقديم الخدمة.", "fcard_title_5": "قطع الغيار حسب التوافر", "fcard_desc_5": "تعرّف على نوع القطعة وتوافرها للموديل قبل الاستبدال.", "fcard_title_6": "تواصل مباشر", "fcard_desc_6": "اتصل أو أرسل تفاصيل الجهاز عبر واتساب للاستفسار.", "home_serv_badge": "الخدمات", "home_serv_title": "أجهزة منزلية يمكن الاستفسار عن صيانتها", "home_serv_desc": "اختر نوع الجهاز، ثم تواصل معنا للتأكد من تفاصيل الخدمة المتاحة.", "serv_washer_desc": "أعطال التشغيل والتصريف والعصر بحسب نوع الغسالة.", "serv_fridge_desc": "مشكلات التبريد والتجميد وتسرب المياه.", "serv_tv_desc": "مشكلات التشغيل والصوت والصورة بحسب الموديل.", "serv_cooker_desc": "أعطال الأفران والبوتاجازات؛ تتطلب مشكلات الغاز احتياطًا وفحصًا متخصصًا.", "serv_footer_txt": "تختلف إمكانية الصيانة حسب نوع الجهاز والموديل والمنطقة؛ تواصل معنا للتأكد قبل الحجز.", "faq_badge": "قبل التواصل", "faq_title": "أسئلة شائعة قبل طلب الصيانة", "faq_desc": "إجابات عامة تساعدك على معرفة الخطوة التالية. يتم تأكيد تفاصيل الخدمة عند التواصل.", "faq_q1": "هل تتم الصيانة في المنزل؟", "faq_a1": "يعتمد ذلك على نوع الجهاز والعطل والمنطقة. تواصل معنا لمعرفة إمكانية الصيانة المنزلية أو الحاجة إلى فحص آخر.", "faq_q2": "هل يوجد ضمان على الصيانة؟", "faq_a2": "تختلف شروط الضمان ونطاقه بحسب العمل وقطع الغيار. اطلب توضيح الشروط قبل الموافقة على الإصلاح.", "faq_q3": "هل تتوفر قطع غيار لكل الماركات؟", "faq_a3": "يختلف التوافر بحسب الماركة والموديل ونوع القطعة. يمكن الاستفسار عن القطعة المناسبة بعد معرفة بيانات الجهاز.", "faq_q4": "متى يتم تحديد موعد الزيارة؟", "faq_a4": "يتم تحديد الموعد بعد التواصل ومراجعة نوع الجهاز والمنطقة وتوافر الخدمة. إرسال رسالة وحده لا يؤكد الموعد.", "loc_hero_badge": "نطاق الخدمة", "loc_hero_title": "استفسر عن الخدمة في منطقتك", "loc_hero_desc": "تواصل معنا لتأكيد إمكانية تقديم الخدمة في محافظتك والمنطقة التابعة لك.", "loc_dyn_badge": "تأكيد التغطية", "loc_dyn_desc_1": "أخبرنا بالمحافظة ونوع الجهاز حتى نراجع إمكانية الخدمة.", "loc_dyn_desc_2": "يتم تأكيد التغطية والموعد والتفاصيل عند التواصل.", "loc_art_title_1": "قبل طلب صيانة في منطقتك", "loc_art_p1_1": "تختلف إمكانية تقديم الخدمة بحسب موقعك ونوع الجهاز. تواصل معنا لتأكيد التغطية المتاحة.", "loc_art_p1_2": "أرسل نوع الجهاز والماركة ووصف المشكلة، واسأل عن خطوات الفحص والتكلفة قبل الموافقة.", "loc_art_hl_title": "تأكيد التغطية والموعد", "loc_art_hl_p1": "لا يتم اعتبار الطلب مؤكدًا قبل الاتفاق على التفاصيل.", "loc_art_hl_p2": "التواصل المباشر يساعد على توضيح الخطوة التالية.", "loc_art_title_2": "معلومات تساعد على تجهيز طلبك", "loc_art_p2_1": "جهّز نوع الجهاز والموديل ووصف العطل.", "loc_art_p2_2": "اذكر المنطقة ووسيلة التواصل المناسبة.", "loc_feat_1_title": "التأكد من التغطية", "loc_feat_1_desc": "تواصل معنا قبل ترتيب زيارة.", "loc_feat_2_title": "توضيح شروط الخدمة", "loc_feat_2_desc": "اسأل عن التكلفة والضمان إن توفّر قبل الإصلاح.", "loc_feat_3_title": "قطع الغيار حسب التوافر", "loc_feat_3_desc": "يتم توضيح نوع القطعة وتوافرها للموديل.", "loc_side_title": "تواصل معنا", "loc_side_title_2": "لتأكيد الخدمة", "loc_side_desc": "مواعيد الخدمة والتغطية يتم تأكيدها عند التواصل.", "loc_side_box_title": "اسأل عن منطقتك", "loc_side_box_btn": "تواصل لتأكيد التغطية", "brands_hero_badge": "اختيار الماركة", "brands_hero_title": "ماركات الأجهزة", "brands_hero_desc": "أسماء العلامات التالية مذكورة لتسهيل اختيار الماركة فقط، ولا تعني اعتمادًا أو شراكة رسمية من الشركة المصنّعة. توافر الصيانة والقطع يُؤكد حسب الموديل.", "brand_dyn_title_1": "معلومات صيانة أجهزة", "brand_dyn_title_2": "وتأكيد التوافر", "brand_dyn_desc_1": "يساعدنا تحديد الماركة والموديل على فهم طلبك.", "brand_dyn_desc_2": "تواصل معنا لمعرفة خيارات الصيانة المتاحة وقطع الغيار المناسبة بحسب الموديل والتوافر.", "brand_art_title_1": "معلومات قبل صيانة أجهزة", "brand_art_p1_2": "تختلف الأعطال بحسب الموديل والعَرَض. يفضّل وصف المشكلة وتأكيد توفر الخدمة قبل تحديد خطوات الفحص.", "brand_art_hl_title": "استفسر عن صيانة أجهزة", "brand_art_hl_title_2": "وخيارات الخدمة", "brand_art_hl_p1": "إمكانية الصيانة المنزلية تختلف حسب الجهاز والعطل والمنطقة.", "brand_art_hl_p2_strong": "تأكيد إمكانية الخدمة حسب التوافر", "brand_art_hl_p3": "لأجهزة", "brand_art_hl_p4": "يتم توضيح خطوات الفحص والتكلفة ونوع القطعة قبل تنفيذ الإصلاح متى كان ذلك ممكنًا.", "brand_feat_1_title": "قطع الغيار حسب التوافر", "brand_feat_1_desc": "يتم مراجعة القطعة المناسبة", "brand_feat_1_desc_2": "بحسب الموديل والتوافر قبل الاستبدال.", "brand_feat_2_title": "توضيح شروط الضمان", "brand_feat_2_desc": "اطلب توضيح نطاق الضمان وشروطه قبل الموافقة على الإصلاح.", "brand_art_title_2": "أجهزة", "brand_art_title_3": "يمكن الاستفسار عن صيانتها", "brand_art_p2_1": "يمكنك الاستفسار عن موديل جهازك وماركته.", "brand_art_p2_2": "ويتم تأكيد إمكانية الخدمة عند التواصل.", "brand_faults_title": "أعطال شائعة لأجهزة", "brand_faults_title_2": "ومعلومات الفحص", "brand_faults_desc": "الأعراض التالية أمثلة عامة وليست تشخيصًا نهائيًا؛ يجب فحص الجهاز لتحديد السبب.", "brand_side_title": "تفاصيل الخدمة الخاصة بـ", "brand_side_desc": "اطلب توضيح خطوات الفحص والتكلفة المتوقعة قبل الموافقة.", "brand_side_box_title": "استفسر عن جهازك", "brand_side_box_btn": "تواصل لطلب الصيانة", "about_hero_badge": "من نحن", "about_hero_title": "مركز TM لصيانة الأجهزة المنزلية", "about_hero_desc": "نستقبل طلبات صيانة الأجهزة المنزلية والكهربائية، ونوضح الخطوات المتاحة بعد معرفة نوع الجهاز والعطل والمنطقة.", "about_sec_badge": "معلومات عن المركز", "about_sec_title": "وضوح في التواصل وخطوات الخدمة", "about_sec_p1": "يعرض هذا الموقع معلومات عن أنواع الأجهزة التي يمكن الاستفسار عن صيانتها ووسائل التواصل مع المركز.", "about_sec_p2": "تختلف إمكانية الخدمة ومواعيدها وقطع الغيار بحسب الجهاز والموديل والمنطقة؛ تواصل معنا لتأكيد التفاصيل قبل ترتيب الزيارة.", "mv_mission_desc": "مساعدة العميل على فهم خطوات طلب الصيانة قبل اتخاذ قرار الإصلاح.", "mv_vision_desc": "تقديم معلومات واضحة عن وسائل التواصل وخيارات الصيانة المتاحة.", "prin_badge": "مبادئ التعامل", "prin_title": "معلومات واضحة قبل بدء الإصلاح", "prin_card_1_title": "التكلفة قبل الموافقة", "prin_card_1_desc": "اطلب توضيح تكلفة الفحص والإصلاح وقطع الغيار قبل بدء العمل.", "prin_card_2_title": "توضيح الخطوات", "prin_card_2_desc": "تأكد من نطاق العمل وما إذا كانت الزيارة المنزلية مناسبة للجهاز والعطل.", "prin_card_3_title": "قطع الغيار حسب التوافر", "prin_card_3_desc": "اسأل عن نوع القطعة ومناسبتها للموديل وتوافرها قبل الاستبدال.", "hw_title": "كيف تبدأ طلب الصيانة؟", "hw_step_1_title": "إرسال التفاصيل", "hw_step_1_desc": "اذكر نوع الجهاز والماركة ووصف العطل عبر الهاتف أو واتساب.", "hw_step_2_title": "تأكيد التغطية", "hw_step_2_desc": "يتم التأكد من إمكانية الخدمة في منطقتك ومن الموعد المتاح.", "hw_step_3_title": "الفحص والتكلفة", "hw_step_3_desc": "استفسر عن نتيجة الفحص والتكلفة قبل الموافقة على الإصلاح.", "hw_step_4_title": "الاتفاق على التنفيذ", "hw_step_4_desc": "تُوضح تفاصيل الإصلاح وقطع الغيار وشروط الضمان إن توفرت قبل التنفيذ.", "cs_title": "تواصل معنا لمعرفة مواعيد الخدمة", "cs_desc": "اتصل أو أرسل تفاصيل الجهاز والعطل؛ سيتم توضيح ما إذا كانت الخدمة متاحة وخطوات المتابعة.", "cs_btn": "اتصل بنا: 01127893459", "serv_hero_badge": "الخدمات", "serv_hero_title": "أنواع الأجهزة وخيارات الصيانة", "serv_hero_desc": "تعرّف على الأجهزة الموجودة في القائمة، ثم تواصل معنا لتأكيد إمكانية الخدمة.", "serv_feat_1": "تحديد نوع الجهاز", "serv_feat_2": "توضيح تفاصيل الطلب", "serv_feat_3": "التأكد من التوافر", "serv_det_badge": "قائمة الأجهزة", "serv_det_title": "اختر جهازك للاستفسار عن الصيانة", "dev_dyn_status": "يتم تأكيد المواعيد عند التواصل", "dyn_stat_1": "تفاصيل حسب الموديل", "dyn_stat_2": "تأكيد التوافر", "dyn_stat_3": "التكلفة قبل الموافقة", "dyn_stat_4": "تواصل مباشر", "dyn_badge_1": "تحديد نوع الجهاز", "dyn_badge_2": "مراجعة تفاصيل الطلب", "db_stat_1": "قطع الغيار حسب التوافر", "db_badge_1": "تفاصيل الجهاز", "db_badge_2": "تأكيد الخدمة", "book_title": "اطلب صيانة جهازك", "book_desc": "املأ البيانات التالية لفتح رسالة واتساب مُجهّزة بطلبك. لن يتم إرسال الطلب تلقائيًا؛ راجع الرسالة واضغط إرسال في واتساب.", "book_btn_submit": "فتح واتساب بالطلب", "footer_about": "مركز TM لاستقبال طلبات صيانة الأجهزة المنزلية والكهربائية. تواصل معنا لتوضيح نوع الجهاز والعطل والتأكد من الخدمة المتاحة في منطقتك.", "footer_loc_1": "تواصل لتأكيد الخدمة المتاحة", "footer_loc_2": "يتم تحديد التغطية عند التواصل", "footer_rights": "جميع الحقوق محفوظة © مركز TM لصيانة الأجهزة المنزلية", "chat_header": "مساعد الصيانة", "chat_welcome": "أهلاً بك! اذكر نوع الجهاز والعطل، وسأرشدك إلى وسيلة التواصل المناسبة. هذه إرشادات عامة وليست تشخيصًا فنيًا.", "exit_title": "هل تحتاج إلى طلب صيانة؟", "exit_desc_1": "تواصل معنا", "exit_desc_2": "للاستفسار عن الخدمة المتاحة", "exit_desc_3": "ومواعيد التواصل.", "exit_btn": "تواصل معنا"});
Object.assign(translations.en, {"brand_name_1": "TM Home Appliance Repair", "loader_text": "Appliance maintenance", "hero_badge": "Contact us to confirm service availability", "hero_title": "Home appliance repair with TM", "hero_desc": "Tell us the appliance type, brand and issue. We will help clarify the next step and available service options.", "hero_btn_book": "Request service", "hero_btn_call": "Call us", "hero_btn_wa": "WhatsApp", "feat_1": "Share appliance details", "feat_2": "Discuss before repair", "feat_3": "Confirm availability before booking", "hero_img_badge": "Service by appliance type", "about_badge": "About us", "about_title": "TM home appliance repair", "about_desc_1": "We receive requests for household and electrical appliance maintenance and help clarify the device and issue before the next step.", "about_desc_2": "Share the appliance type, brand and problem, and ask about local availability and expected costs before approving repairs.", "about_highlight": "Our goal is to make the available service steps clear before you decide.", "about_img_badge_str": "Clear steps", "about_img_badge_spn": "Before repair", "features_badge": "Service principles", "features_title": "Clear steps before repair", "warranty_months": "Service<br>details", "warranty_badge": "Before approval", "warranty_title": "Ask about warranty terms", "warranty_desc": "Terms vary by service, work and parts; ask for clarification before approval.", "fcard_title_1": "Identify the appliance", "fcard_desc_1": "The appliance type and brand help us understand your request.", "fcard_title_2": "Clarify the steps", "fcard_desc_2": "Ask about inspection and costs before approving repairs.", "fcard_title_3": "Clear options", "fcard_desc_3": "Options depend on the issue and model.", "fcard_title_4": "Arrange an appointment", "fcard_desc_4": "Appointments are arranged after service availability is confirmed.", "fcard_title_5": "Parts availability", "fcard_desc_5": "Ask which part is suitable and available for the model.", "fcard_title_6": "Direct contact", "fcard_desc_6": "Call or share appliance details through WhatsApp.", "home_serv_badge": "Services", "home_serv_title": "Appliances you can ask us about", "home_serv_desc": "Choose the appliance type, then contact us to confirm available service.", "serv_washer_desc": "Operating, draining and spinning issues, depending on the washer.", "serv_fridge_desc": "Cooling, freezing and water leakage issues.", "serv_tv_desc": "Power, sound and picture issues depending on model.", "serv_cooker_desc": "Oven and cooker issues; gas-related problems require specialist care.", "serv_footer_txt": "Availability depends on appliance type, model and area. Please confirm before booking.", "faq_badge": "Before you contact us", "faq_title": "Frequently asked questions", "faq_desc": "General guidance to help you take the next step. Details are confirmed through direct contact.", "faq_q1": "Can repairs be done at home?", "faq_a1": "This depends on the appliance, issue and area. Contact us to confirm whether an at-home visit is available.", "faq_q2": "Is there a repair warranty?", "faq_a2": "Warranty terms scope and terms vary by work and parts. Ask for clarification before approving repairs.", "faq_q3": "Are parts available for every brand?", "faq_a3": "Availability depends on brand, model and part type. We can discuss the appropriate part after reviewing the appliance details.", "faq_q4": "When is an appointment confirmed?", "faq_a4": "The appointment is set after reviewing the appliance, location and availability. A message alone does not confirm an appointment.", "loc_hero_badge": "Service coverage", "loc_hero_title": "Ask about service in your area", "loc_hero_desc": "Contact us to confirm whether service is available in your governorate and area.", "loc_dyn_badge": "Confirm availability", "loc_dyn_desc_1": "Tell us the governorate and appliance type so we can review service availability.", "loc_dyn_desc_2": "Coverage, appointment and service details are confirmed through direct contact.", "loc_art_title_1": "Before requesting local service", "loc_art_p1_1": "Availability varies by location and appliance. Contact us to confirm coverage.", "loc_art_p1_2": "Share the appliance type, brand and symptoms and ask about inspection steps and expected cost.", "loc_art_hl_title": "Confirm coverage and timing", "loc_art_hl_p1": "A request is not confirmed until the details are agreed.", "loc_art_hl_p2": "Direct contact clarifies the next step.", "loc_art_title_2": "Details to prepare", "loc_art_p2_1": "Prepare the appliance type, model and issue.", "loc_art_p2_2": "Share your area and preferred contact method.", "loc_feat_1_title": "Confirm coverage", "loc_feat_1_desc": "Contact us before arranging a visit.", "loc_feat_2_title": "Clarify service terms", "loc_feat_2_desc": "Ask about cost and any warranty before repair.", "loc_feat_3_title": "Parts availability", "loc_feat_3_desc": "Part type and availability are checked for the model.", "loc_side_title": "Contact us", "loc_side_title_2": "to confirm service", "loc_side_desc": "Service hours and coverage are confirmed by direct contact.", "loc_side_box_title": "Ask about your area", "loc_side_box_btn": "Contact us to confirm coverage", "brands_hero_badge": "Choose a brand", "brands_hero_title": "Appliance brands", "brands_hero_desc": "Brand names are shown to help identify your appliance only. They do not imply official authorization or manufacturer partnership. Service and parts availability depend on the model.", "brand_dyn_title_1": "Repair information for", "brand_dyn_title_2": "appliances", "brand_dyn_desc_1": "The appliance brand and model help us understand your request.", "brand_dyn_desc_2": "Contact us to discuss available maintenance options and parts for your model.", "brand_art_title_1": "Before servicing", "brand_art_p1_2": "Issues vary by model and symptoms. Share the details and confirm availability before arranging an inspection.", "brand_art_hl_title": "Ask about", "brand_art_hl_title_2": "service options", "brand_art_hl_p1": "Home service depends on the appliance, issue and area.", "brand_art_hl_p2_strong": "Availability confirmed on request", "brand_art_hl_p3": "for", "brand_art_hl_p4": "Inspection steps, cost and part details should be clarified before repair whenever possible.", "brand_feat_1_title": "Parts based on availability", "brand_feat_1_desc": "The suitable part is reviewed", "brand_feat_1_desc_2": "according to model and availability.", "brand_feat_2_title": "Warranty terms terms", "brand_feat_2_desc": "Ask for the scope and terms of any warranty before approving work.", "brand_art_title_2": "Appliance types", "brand_art_title_3": "you can ask about", "brand_art_p2_1": "You can ask about your appliance model and brand.", "brand_art_p2_2": "Service availability is confirmed through direct contact.", "brand_faults_title": "Common appliance symptoms", "brand_faults_title_2": "and inspection notes", "brand_faults_desc": "These are general examples, not a diagnosis. An inspection is needed to identify the cause.", "brand_side_title": "Service details for", "brand_side_desc": "Ask about inspection steps and expected costs before approving repair.", "brand_side_box_title": "Ask about your appliance", "brand_side_box_btn": "Contact us", "about_hero_badge": "About us", "about_hero_title": "TM Home Appliance Repair", "about_hero_desc": "We receive home-appliance repair requests and clarify next steps after reviewing the appliance, issue and area.", "about_sec_badge": "About the center", "about_sec_title": "Clear communication and service steps", "about_sec_p1": "This site explains the appliance types that can be discussed with the center and the available contact options.", "about_sec_p2": "Availability, timing and parts depend on appliance, model and location. Contact us to confirm details before arranging a visit.", "mv_mission_desc": "Help customers understand the repair-request steps before deciding on repair.", "mv_vision_desc": "Provide clear information about contact methods and available maintenance options.", "prin_badge": "Our principles", "prin_title": "Clear information before repair", "prin_card_1_title": "Cost before approval", "prin_card_1_desc": "Ask about inspection, repair and parts costs before work begins.", "prin_card_2_title": "Clear steps", "prin_card_2_desc": "Confirm the scope of work and whether a home visit suits the appliance and issue.", "prin_card_3_title": "Parts availability", "prin_card_3_desc": "Ask which part is appropriate for the model and whether it is available.", "hw_title": "How to start a repair request", "hw_step_1_title": "Share the details", "hw_step_1_desc": "Tell us the appliance type, brand and symptoms by phone or WhatsApp.", "hw_step_2_title": "Confirm coverage", "hw_step_2_desc": "Service availability and appointment options are checked for your area.", "hw_step_3_title": "Inspection and cost", "hw_step_3_desc": "Ask about inspection findings and costs before approving repair.", "hw_step_4_title": "Agree on the work", "hw_step_4_desc": "Clarify repair, parts and any warranty terms before work begins.", "cs_title": "Contact us for service hours", "cs_desc": "Call or share the appliance details to check whether service is available and learn the next steps.", "cs_btn": "Call us: 01127893459", "serv_hero_badge": "Services", "serv_hero_title": "Appliance types and repair options", "serv_hero_desc": "Browse appliance categories, then contact us to confirm service availability.", "serv_feat_1": "Identify the appliance", "serv_feat_2": "Clarify the request", "serv_feat_3": "Confirm availability", "serv_det_badge": "Appliances", "serv_det_title": "Choose an appliance to ask about repair", "dev_dyn_status": "Appointment times are confirmed by contact", "dyn_stat_1": "Model-specific details", "dyn_stat_2": "Availability check", "dyn_stat_3": "Cost before approval", "dyn_stat_4": "Direct contact", "dyn_badge_1": "Identify appliance", "dyn_badge_2": "Review request details", "db_stat_1": "Parts availability", "db_badge_1": "Appliance details", "db_badge_2": "Confirm service", "book_title": "Request appliance service", "book_desc": "Complete these fields to open a prepared WhatsApp message. The request is not sent automatically; review the message and press Send in WhatsApp.", "book_btn_submit": "Open WhatsApp message", "footer_about": "TM receives home-appliance repair requests. Contact us with the appliance type and issue to confirm service availability in your area.", "footer_loc_1": "Contact us to confirm availability", "footer_loc_2": "Coverage is confirmed by contact", "footer_rights": "© TM Home Appliance Repair. All rights reserved.", "chat_header": "Maintenance helper", "chat_welcome": "Welcome! Tell me the appliance type and issue. I can guide you to a contact option; this is general guidance, not a technical diagnosis.", "exit_title": "Need appliance service?", "exit_desc_1": "Contact us", "exit_desc_2": "to ask about available service", "exit_desc_3": "and timing.", "exit_btn": "Contact us"});


// 1. الداتا الخاصة بكل محافظات مصر
const locationsData = {
  "القاهرة": {
    "مدينة نصر": ["عباس العقاد", "مكرم عبيد", "مصطفى النحاس", "حسن المأمون", "الطيران", "الحي العاشر", "الحي السابع", "زهراء مدينة نصر"],
    "المعادي": ["شارع 9", "شارع النصر", "دجلة", "زهراء المعادي", "كورنيش النيل", "المعادي الجديدة", "طرة"],
    "مصر الجديدة": ["جامعة الدول", "ميدان الحجاز", "شارع الميرغني", "الكوربة", "روكسي", "ميدان المحكمة", "شيراتون"],
    "التجمع الخامس": ["شارع التسعين الشمالي", "شارع التسعين الجنوبي", "الرحاب", "البنفسج", "الياسمين", "النرجس", "اللوتس", "الشويفات"],
    "شبرا": ["شبرا مصر", "روض الفرج", "الخلفاوي", "مسرة", "شارع شبرا الرئيسي"],
    "وسط البلد": ["التحرير", "طلعت حرب", "قصر النيل", "عابدين", "باب اللوق"],
    "المقطم": ["شارع 9", "الهضبة العليا", "الهضبة الوسطى", "ميدان النافورة"]
  },
  "الجيزة": {
    "فيصل": ["شارع العشرين", "شارع الطالبية", "شارع ضياء", "شارع العريش", "شارع المطبعة", "التعاون", "المريوطية فيصل", "المساحة", "الطوابق"],
    "الهرم": ["شارع العريش", "عز الدين عمر", "اللبيني", "المريوطية هرم", "الرماية", "مشعل", "الطالبية هرم", "الكوم الأخضر", "المطبعة"],
    "الدقي": ["شارع مصدق", "شارع التحرير", "ميدان عمان", "محيي الدين أبو العز", "نادي الصيد", "ميدان المساحة"],
    "المهندسين": ["جامعة الدول العربية", "شارع البطل أحمد عبد العزيز", "شارع شهاب", "ميدان لبنان", "شارع سوريا", "شارع وادي النيل", "أحمد عرابي"],
    "الشيخ زايد": ["بيفرلي هيلز", "الحي الأول", "الحي الثالث", "المحور المركزي", "زايد 2000", "الثورة الخضراء"],
    "6 أكتوبر": ["الحي المتميز", "الحي الأول", "الحي السابع", "ميدان الحصري", "غرب سوميد", "حدائق أكتوبر"]
  },
  "الإسكندرية": {
    "سموحة": ["شارع ألبرت الأول", "شارع فوزي معاذ", "فيكتور عمانويل", "شارع النقل والهندسة", "ميدان فيكتوريا"],
    "ميامي": ["شارع إسكندر إبراهيم", "شارع خليل حمادة", "جمال عبد الناصر", "خالد بن الوليد"],
    "سيدي بشر": ["خالد بن الوليد", "محمد نجيب", "العيسوي", "شارع القاهرة"],
    "العصافرة": ["شارع 45", "شارع جمال عبد الناصر", "العصافرة بحري", "العصافرة قبلي"],
    "لوران": ["شارع الإقبال", "شارع شعراوي", "أبو قير"],
    "جليم": ["شارع أبو قير", "الترام", "كورنيش جليم"],
    "المنتزه": ["الرأس السوداء", "المندرة", "الملاحة"]
  },
  "الساحل الشمالي": {
    "مارينا": ["مارينا 1", "مارينا 2", "مارينا 3", "مارينا 4", "مارينا 5", "مارينا 6", "مارينا 7"],
    "مراسي": ["سيدي عبد الرحمن", "الصافية", "بلانكا"],
    "العلمين": ["قرية الدبلوماسيين", "هايسيندا", "امواج", "العلمين الجديدة", "بورتو جولف"],
    "سيدي كرير": ["قرية سيدي كرير", "القرية الدبلوماسية"],
    "برج العرب": ["الساحل القديم", "قرية الشروق", "قرية كرير"]
  },
  "الإسماعيلية": {
    "حي أول": ["شارع محمد علي", "ميدان الممر", "شارع السلطان حسين"],
    "حي ثان": ["شارع الثلاثيني", "شارع شبين الكوم", "حي السلام", "عرايشية مصر"],
    "حي ثالث": ["الشيخ زايد", "الشارع التجاري", "الخامسة", "المساريد"],
    "القنطرة": ["القنطرة شرق", "القنطرة غرب"],
    "فايد": ["الشارع الرئيسي", "طريق البلاجات"]
  },
  "الدقهلية": {
    "المنصورة": ["حي الجامعة", "شارع جيهان", "شارع قناة السويس", "شارع بورسعيد", "المشاية السفلية", "توريل", "حي شرق", "حي غرب"],
    "طلخا": ["شارع البحر", "مجمع المحاكم", "طريق بلقاس"],
    "ميت غمر": ["شارع بورسعيد", "شارع المعاهدة", "دقادوس"],
    "السنبلاوين": ["شارع بورسعيد", "شارع الجلاء"]
  },
  "الشرقية": {
    "الزقازيق": ["شارع المحافظة", "القومية", "شارع فاروق", "حي الزهور", "شارع الجلاء", "شارع طلبة عويضة"],
    "العاشر من رمضان": ["المجاورة الأولى", "صيدناوي", "الأردنية", "الحي الأول", "الحي الثاني"],
    "بلبيس": ["شارع بورسعيد", "شارع سعد زغلول"],
    "منيا القمح": ["شارع هندسة الري", "شارع سعد زغلول"]
  },
  "الغربية": {
    "طنطا": ["شارع البحر", "شارع سعيد", "شارع النحاس", "شارع الجلاء", "شارع حسن رضوان", "المرشدي", "سيجر"],
    "المحلة الكبرى": ["شارع البحر", "سكة طنطا", "محب", "الرجبي", "السبع بنات"],
    "زفتى": ["شارع البحر", "شارع بورسعيد"],
    "كفر الزيات": ["شارع الجيش", "الشارع الرئيسي"]
  },
  "القليوبية": {
    "شبرا الخيمة": ["الشارع الجديد", "شارع 15 مايو", "الشارع السياحي", "بهتيم", "مسطرد"],
    "بنها": ["شارع فريد ندا", "شارع سعد زغلول", "كفر الجزار", "الفيلات"],
    "العبور": ["الحي الأول", "الحي الثاني", "الحي التاسع", "الجولف", "إسكان الشباب"],
    "الخانكة": ["الشارع الرئيسي", "شارع المحطة"]
  },
  "المنوفية": {
    "شبين الكوم": ["شارع الجلاء", "شارع باريس", "شارع جمال عبد الناصر", "البر الشرقي", "حي شرق"],
    "مدينة السادات": ["المنطقة الأولى", "المنطقة الثانية", "المنطقة الرابعة", "محور الخدمات"],
    "أشمون": ["شارع سعد زغلول", "شارع بورسعيد"],
    "قويسنا": ["شارع الجلاء", "شارع الجيش"]
  },
  "البحيرة": {
    "دمنهور": ["شارع عبد السلام الشاذلي", "شارع الجمهورية", "شبرا", "المعهد الديني"],
    "كفر الدوار": ["شارع بورسعيد", "الحدائق", "سيدي شحاتة"],
    "إيتاي البارود": ["الشارع الرئيسي", "شارع المحطة"],
    "رشيد": ["شارع البحر", "كورنيش النيل"]
  },
  "كفر الشيخ": {
    "كفر الشيخ (المدينة)": ["شارع النبوي المهندس", "شارع الخليفة المأمون", "تقسيم المحافظة", "شارع الجيش"],
    "دسوق": ["شارع سعد زغلول", "شارع الشركات"],
    "بلطيم": ["الشارع الرئيسي", "مصيف بلطيم"],
    "قلين": ["الشارع الرئيسي"]
  },
  "دمياط": {
    "دمياط (المدينة)": ["شارع التحرير", "شارع الجلاء", "كورنيش النيل", "ميدان سرور", "باب الحرس"],
    "دمياط الجديدة": ["الحي الأول", "الحي الثاني", "الصعيدي", "المنطقة المركزية"],
    "رأس البر": ["شارع بورسعيد", "شارع النيل", "اللسان"]
  },
  "بورسعيد": {
    "حي الشرق": ["شارع الجمهورية", "شارع 23 يوليو", "شارع صفية زغلول"],
    "حي العرب": ["شارع الثلاثيني", "شارع التجاري"],
    "حي الزهور": ["الشارع الرئيسي", "شارع 23 ديسمبر"],
    "بورفؤاد": ["شارع الجمهورية", "ميدان المعديات"]
  },
  "السويس": {
    "حي السويس": ["شارع الجيش", "كورنيش السويس", "الخضر"],
    "حي الأربعين": ["شارع أحمد عرابي", "ميدان الترعة", "السادات"],
    "حي فيصل": ["مدينة الصباح", "المستقبل", "التوفيق"],
    "عتاقة": ["السلام 1", "السلام 2"]
  },
  "مطروح": {
    "مرسى مطروح": ["شارع الإسكندرية", "عوام", "البوسيت", "شارع كورنيش النيل", "علم الروم"],
    "الضبعة": ["الشارع الرئيسي", "طريق الساحل"],
    "الحمام": ["الشارع التجاري", "طريق الإسكندرية"]
  },
  "الفيوم": {
    "الفيوم (المدينة)": ["شارع جمال عبد الناصر", "شارع البوسطة", "المسلة", "دلة", "حي الجامعة"],
    "سنورس": ["الشارع الرئيسي", "شارع المحطة"],
    "طامية": ["الشارع الرئيسي"],
    "إطسا": ["الشارع الرئيسي"]
  },
  "بني سويف": {
    "بني سويف (المدينة)": ["شارع عبد السلام عارف", "مقبل", "أرض المحلج", "شارع أحمد عرابي", "كورنيش النيل"],
    "الواسطى": ["شارع سعد زغلول", "الشارع الرئيسي"],
    "ببا": ["الشارع الرئيسي"],
    "ناصر": ["الشارع الرئيسي"]
  },
  "المنيا": {
    "المنيا (المدينة)": ["شارع طه حسين", "كورنيش النيل", "أرض المولد", "حي شلبي", "أبو هلال"],
    "ملوي": ["شارع العرفاني", "شارع المجيدي"],
    "بني مزار": ["شارع الجمهورية", "شارع بورسعيد"],
    "مغاغة": ["شارع الجمهورية"]
  },
  "أسيوط": {
    "أسيوط (المدينة)": ["شارع الجمهورية", "شارع يسرى راغب", "المحطة", "حي شرق", "السادات", "نزلة عبد الله"],
    "ديروط": ["الشارع الرئيسي", "شارع الجيش"],
    "الفتح": ["مدينة أسيوط الجديدة", "الشارع الرئيسي"],
    "أبو تيج": ["الشارع الرئيسي"]
  },
  "سوهاج": {
    "سوهاج (المدينة)": ["شارع 15", "شارع أسيوط سوهاج", "المحطة", "حي شرق", "مدينة ناصر"],
    "جرجا": ["الشارع الرئيسي", "شارع المحطة"],
    "طهطا": ["شارع بورسعيد", "شارع أحمد عرابي"],
    "أخميم": ["الشارع الرئيسي"]
  },
  "قنا": {
    "قنا (المدينة)": ["شارع الشنهورية", "شارع مصطفى كامل", "مدينة العمال", "المحطة"],
    "نجع حمادي": ["شارع 30 مارس", "الشارع الرئيسي"],
    "قوص": ["الشارع الرئيسي", "المركز"],
    "فرشوط": ["الشارع الرئيسي"]
  },
  "الأقصر": {
    "الأقصر (المدينة)": ["شارع التليفزيون", "الكرنك", "العوامية", "شارع المدينة المنورة", "شارع خالد بن الوليد"],
    "إسنا": ["الشارع الرئيسي", "شارع البحر"],
    "أرمنت": ["الشارع الرئيسي", "المحطة"]
  },
  "أسوان": {
    "أسوان (المدينة)": ["شارع المطار", "كورنيش النيل", "السيل", "كيما", "أطلس", "المحمودية"],
    "إدفو": ["الشارع الرئيسي", "طريق المعبد"],
    "كوم أمبو": ["الشارع الرئيسي", "السوق"]
  },
  "البحر الأحمر": {
    "الغردقة": ["شارع الشيراتون", "الكوثر", "الهضبة", "الممشى السياحي", "الدهار", "الأحياء"],
    "الجونة": ["أبو تيج مارينا", "الداون تاون", "كفر الجونة"],
    "سفاجا": ["الشارع الرئيسي", "كيلو 8"],
    "رأس غارب": ["الشارع الرئيسي"]
  },
  "الوادي الجديد": {
    "الخارجة": ["شارع جمال عبد الناصر", "حي الزهور", "البساتين"],
    "الداخلة": ["موط", "الشارع الرئيسي"],
    "الفرافرة": ["الشارع الرئيسي"]
  },
  "شمال سيناء": {
    "العريش": ["شارع 23 يوليو", "المساعيد", "ضاحية السلام", "شارع البحر"],
    "بئر العبد": ["الشارع الرئيسي"],
    "الشيخ زويد": ["الشارع الرئيسي"]
  },
  "جنوب سيناء": {
    "شرم الشيخ": ["خليج نعمة", "الهضبة", "نبق", "السوق القديم", "حي النور"],
    "طور سيناء": ["حي الزهور", "المنشية", "شارع المحافظة"],
    "دهب": ["الممشى", "العصلة", "المسبط"]
  }
};

// 2. قائمة الماركات
const allBrandsList = ["Samsung", "LG", "Toshiba", "Zanussi", "Bosch", "Beko", "Ariston", "Indesit", "Tornado", "Fresh", "Electrolux", "Panasonic", "White Whale", "Hoover", "AEG", "Unionaire", "Sharp", "Carrier"];
const brandsNamesArabic = {
  "Samsung": "سامسونج", "LG": "إل جي ال جي", "Toshiba": "توشيبا", "Zanussi": "زانوسي", 
  "Bosch": "بوش", "Beko": "بيكو", "Ariston": "أريستون اريستون", "Indesit": "إنديست انديست", 
  "Tornado": "تورنيدو", "Fresh": "فريش", "Electrolux": "إلكترولوكس الكترولوكس", 
  "Panasonic": "باناسونيك", "White Whale": "وايت ويل", "Hoover": "هوفر", 
  "AEG": "اي اي جي", "Unionaire": "يونيون اير", "Sharp": "شارب", "Carrier": "كاريير"
};

// 3. الداتا الكاملة لكل جهاز
const devicesData = {
  "washing-machine": {
    "seoTitle": "صيانة الغسالات | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الغسالات، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الغسالات, طلب صيانة, مركز TM",
    "title": "صيانة الغسالات — تواصل لتأكيد الخدمة",
    "shortName": "الغسالات",
    "desc": "يمكن الاستفسار عن صيانة الغسالات. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "عدم العصر أو توقف البرنامج",
      "عدم تصريف المياه",
      "تسرب المياه",
      "اهتزاز أو صوت غير معتاد"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الغسالات؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/washer.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الغسالات"
  },
  "fridge": {
    "seoTitle": "صيانة الثلاجات | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الثلاجات، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الثلاجات, طلب صيانة, مركز TM",
    "title": "صيانة الثلاجات — تواصل لتأكيد الخدمة",
    "shortName": "الثلاجات",
    "desc": "يمكن الاستفسار عن صيانة الثلاجات. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف التبريد",
      "تراكم الثلج",
      "تسرب المياه",
      "صوت غير معتاد"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الثلاجات؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/fridge.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الثلاجات"
  },
  "deep-freezer": {
    "seoTitle": "صيانة الديب فريزر | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الديب فريزر، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الديب فريزر, طلب صيانة, مركز TM",
    "title": "صيانة الديب فريزر — تواصل لتأكيد الخدمة",
    "shortName": "الديب فريزر",
    "desc": "يمكن الاستفسار عن صيانة الديب فريزر. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف التجميد",
      "تراكم الثلج",
      "تسرب المياه",
      "توقف التشغيل"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الديب فريزر؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/fridge.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الديب فريزر"
  },
  "ac": {
    "seoTitle": "صيانة أجهزة التكييف | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة أجهزة التكييف، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة أجهزة التكييف, طلب صيانة, مركز TM",
    "title": "صيانة أجهزة التكييف — تواصل لتأكيد الخدمة",
    "shortName": "أجهزة التكييف",
    "desc": "يمكن الاستفسار عن صيانة أجهزة التكييف. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف التبريد",
      "تسرب المياه",
      "صوت أو اهتزاز غير معتاد",
      "توقف التشغيل"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة أجهزة التكييف؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/ac.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة أجهزة التكييف"
  },
  "tv": {
    "seoTitle": "صيانة الشاشات | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الشاشات، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الشاشات, طلب صيانة, مركز TM",
    "title": "صيانة الشاشات — تواصل لتأكيد الخدمة",
    "shortName": "الشاشات",
    "desc": "يمكن الاستفسار عن صيانة الشاشات. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "الشاشة لا تعمل",
      "الصورة غير واضحة أو سوداء",
      "مشكلات في الصوت",
      "ظهور خطوط بالصورة"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الشاشات؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/tv.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الشاشات"
  },
  "microwave": {
    "seoTitle": "صيانة الميكروويف | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الميكروويف، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الميكروويف, طلب صيانة, مركز TM",
    "title": "صيانة الميكروويف — تواصل لتأكيد الخدمة",
    "shortName": "الميكروويف",
    "desc": "يمكن الاستفسار عن صيانة الميكروويف. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "الجهاز لا يسخن",
      "توقف التشغيل",
      "مشكلات لوحة التحكم",
      "صوت غير معتاد"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الميكروويف؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/microwave.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الميكروويف"
  },
  "cooker": {
    "seoTitle": "صيانة الأفران والبوتاجازات | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الأفران والبوتاجازات، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الأفران والبوتاجازات, طلب صيانة, مركز TM",
    "title": "صيانة الأفران والبوتاجازات — تواصل لتأكيد الخدمة",
    "shortName": "الأفران والبوتاجازات",
    "desc": "يمكن الاستفسار عن صيانة الأفران والبوتاجازات. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف التسخين",
      "خلل في الإشعال",
      "عدم ثبات اللهب",
      "باب الفرن لا يغلق بإحكام"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الأفران والبوتاجازات؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/kitchen.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الأفران والبوتاجازات"
  },
  "heater": {
    "seoTitle": "صيانة السخانات | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة السخانات، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة السخانات, طلب صيانة, مركز TM",
    "title": "صيانة السخانات — تواصل لتأكيد الخدمة",
    "shortName": "السخانات",
    "desc": "يمكن الاستفسار عن صيانة السخانات. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف التسخين",
      "توقف التشغيل",
      "تسرب المياه",
      "انقطاع متكرر"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة السخانات؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/heater.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة السخانات"
  },
  "dishwasher": {
    "seoTitle": "صيانة غسالات الأطباق | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة غسالات الأطباق، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة غسالات الأطباق, طلب صيانة, مركز TM",
    "title": "صيانة غسالات الأطباق — تواصل لتأكيد الخدمة",
    "shortName": "غسالات الأطباق",
    "desc": "يمكن الاستفسار عن صيانة غسالات الأطباق. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "عدم سحب المياه",
      "عدم تصريف المياه",
      "ضعف التنظيف",
      "تسرب المياه"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة غسالات الأطباق؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/washer-dish.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة غسالات الأطباق"
  },
  "dryer": {
    "seoTitle": "صيانة مجففات الملابس | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة مجففات الملابس، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة مجففات الملابس, طلب صيانة, مركز TM",
    "title": "صيانة مجففات الملابس — تواصل لتأكيد الخدمة",
    "shortName": "مجففات الملابس",
    "desc": "يمكن الاستفسار عن صيانة مجففات الملابس. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "الملابس لا تجف",
      "الحلة لا تدور",
      "صوت غير معتاد",
      "توقف التشغيل"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة مجففات الملابس؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/washer.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة مجففات الملابس"
  },
  "hood": {
    "seoTitle": "صيانة الشفاطات | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة الشفاطات، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة الشفاطات, طلب صيانة, مركز TM",
    "title": "صيانة الشفاطات — تواصل لتأكيد الخدمة",
    "shortName": "الشفاطات",
    "desc": "يمكن الاستفسار عن صيانة الشفاطات. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف الشفط",
      "ارتفاع الصوت",
      "توقف التشغيل",
      "تعطل مفتاح التحكم"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة الشفاطات؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/hood.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة الشفاطات"
  },
  "dispenser": {
    "seoTitle": "صيانة مبردات المياه | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة مبردات المياه، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة مبردات المياه, طلب صيانة, مركز TM",
    "title": "صيانة مبردات المياه — تواصل لتأكيد الخدمة",
    "shortName": "مبردات المياه",
    "desc": "يمكن الاستفسار عن صيانة مبردات المياه. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف التبريد",
      "ضعف التسخين",
      "تسرب المياه",
      "توقف التشغيل"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة مبردات المياه؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/heater.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة مبردات المياه"
  },
  "vacuum": {
    "seoTitle": "صيانة المكانس الكهربائية | مركز TM",
    "seoDesc": "تواصل مع مركز TM للاستفسار عن صيانة المكانس الكهربائية، مع ذكر الموديل والعطل وتأكيد التغطية والتكلفة قبل الإصلاح.",
    "seoKeywords": "صيانة المكانس الكهربائية, طلب صيانة, مركز TM",
    "title": "صيانة المكانس الكهربائية — تواصل لتأكيد الخدمة",
    "shortName": "المكانس الكهربائية",
    "desc": "يمكن الاستفسار عن صيانة المكانس الكهربائية. تختلف خطوات الفحص والإصلاح بحسب نوع الجهاز والموديل والأعراض الظاهرة.",
    "faults": [
      "ضعف الشفط",
      "صوت مرتفع",
      "توقف التشغيل",
      "مشكلة في سلك الكهرباء"
    ],
    "extraServices": [
      "فحص الأعراض وتوضيح الخطوات المناسبة بحسب الموديل.",
      "الاستفسار عن توافر قطع الغيار المناسبة قبل الاستبدال.",
      "مراجعة التكلفة وشروط الضمان إن توفرت قبل الموافقة."
    ],
    "faqs": [
      {
        "q": "ما المعلومات المطلوبة قبل طلب صيانة المكانس الكهربائية؟",
        "a": "يفضل تجهيز الماركة والموديل ووصف العطل، ثم التواصل لتأكيد إمكانية الخدمة في منطقتك."
      },
      {
        "q": "هل يمكن تحديد التكلفة عبر الرسالة فقط؟",
        "a": "قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح."
      }
    ],
    "image": "/assets/vacuum.svg",
    "whatsappMessage": "أريد الاستفسار عن صيانة المكانس الكهربائية"
  }
};

// ================= الإضافات الأساسية =================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = type === 'success' ? `<i class="fa-solid fa-check-circle"></i> ${message}` : `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

window.addEventListener('offline', () => { document.getElementById('offline-overlay').classList.add('active'); });
window.addEventListener('online', () => { 
  document.getElementById('offline-overlay').classList.remove('active'); 
  const lang = document.documentElement.lang || 'ar';
  showToast(lang === 'en' ? 'Internet connection restored' : 'تمت استعادة الاتصال بالإنترنت بنجاح', 'success');
});

// ================= محرك السيو الديناميكي (عربي / أجنبي في مصر) =================
function updateSEO(title, desc, keywords, urlPart) {
  const currentLang = document.documentElement.lang || 'ar';
  
  // دمج اسم البراند مع الكلمة المفتاحية الأساسية
  const brandSuffix = currentLang === 'en' ? " | TM" : " | مركز TM";
  document.title = title + brandSuffix;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = desc;

  const metaKeys = document.querySelector('meta[name="keywords"]');
  if (metaKeys) {
    // فصل الكلمات المفتاحية حسب اللغة، مع التركيز على مصر للأجانب
    const baseKeysAr = "مركز TM لصيانة الأجهزة المنزلية, صيانة بالمنزل, مركز صيانة, تصليح اجهزة";
    const baseKeysEn = "TM appliance maintenance, home appliance repair, repair request";
    const baseKeys = currentLang === 'en' ? baseKeysEn : baseKeysAr;
    
    metaKeys.content = (keywords ? keywords + ", " : "") + baseKeys;
  }
  
  const ogTitle = document.getElementById('og-title'); 
  if(ogTitle) ogTitle.content = title + brandSuffix;
  
  const ogDesc = document.getElementById('og-desc'); 
  if(ogDesc) ogDesc.content = desc;
  
  const canonical = document.getElementById('canonical-url'); 
  if(canonical) {
      let fullUrl = urlPart ? `https://www.markazalmuetamid.com/${urlPart}` : `https://www.markazalmuetamid.com/`;
      canonical.href = fullUrl;
  }

  const schemaScript = document.getElementById('dynamic-schema');
  if(schemaScript) {
    try {
      let schema = JSON.parse(schemaScript.innerText);
      if(Array.isArray(schema['@graph'])) {
        schema['@graph'][0].name = `${title} - ${currentLang === 'en' ? 'TM Home Appliance Repair' : 'مركز TM لصيانة الأجهزة المنزلية'}`;
        schemaScript.innerText = JSON.stringify(schema);
      }
    } catch(e) { console.log('Schema Update Error:', e); }
  }

  const oldFaqSchema = document.getElementById('faq-schema');
  if (oldFaqSchema) oldFaqSchema.remove();

  if (urlPart && urlPart.startsWith('services/')) {
    const currentDeviceKey = urlPart.split('/')[1]; 
    const currentDeviceData = devicesData[currentDeviceKey];

    if (currentDeviceData && currentDeviceData.faqs && currentDeviceData.faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": currentDeviceData.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      };
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'faq-schema';
      script.text = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }
  }
}


Object.assign(translations.ar, {"loc_art_hl_p1": "إمكانية الخدمة المنزلية تعتمد على نوع الجهاز والعطل والمنطقة. تواصل معنا لتأكيد التغطية المتاحة.", "loc_art_title_2": "معلومات مهمة قبل ترتيب الخدمة", "loc_art_p1_2": "تختلف إمكانية تقديم الخدمة بحسب موقعك ونوع الجهاز. أرسل تفاصيل العطل واسأل عن خطوات الفحص والتكلفة.", "bd_desc_tv": "يمكن الاستفسار عن أعطال الصورة والصوت والتشغيل بحسب الموديل.", "bf_card_desc_3": "قد تشمل الأعراض شاشة سوداء أو خطوطًا عمودية. يلزم تحديد السبب بالفحص قبل اقتراح الإصلاح.", "prin_card_3_desc": "اسأل عن نوع قطعة الغيار ومدى مناسبتها للموديل وتوافرها قبل الاستبدال.", "loc_art_hl_p2": "تختلف خطوات الصيانة من جهاز لآخر؛ نوضح الخيارات المتاحة بعد معرفة نوع الجهاز والعَرَض.", "chat_welcome": "أهلاً بك! اذكر نوع الجهاز والعطل، وسأرشدك إلى وسيلة التواصل المناسبة. هذه إرشادات عامة وليست تشخيصًا فنيًا."});
Object.assign(translations.en, {"loc_art_hl_p1": "Home-service availability depends on the appliance, issue and area. Contact us to confirm coverage.", "loc_art_title_2": "Before arranging service", "loc_art_p1_2": "Service availability varies by location and appliance. Share the issue and ask about inspection steps and cost.", "bd_desc_tv": "Ask about picture, sound and power issues for your appliance model.", "bf_card_desc_3": "Symptoms may include a black screen or vertical lines. Inspection is needed before recommending a repair.", "prin_card_3_desc": "Ask which part is suitable for the model and whether it is available before replacement.", "loc_art_hl_p2": "Repair steps vary by appliance. Available options are clarified after reviewing the type and symptoms.", "chat_welcome": "Welcome! Tell me the appliance type and issue. I can guide you to a contact option; this is general guidance, not a technical diagnosis."});
for (const language of [translations.ar, translations.en]) { for (const key of Object.keys(language)) { if (key.startsWith("testi_")) language[key] = ""; } }

// ================= محرك الترجمة الديناميكي =================
const langToggleBtn = document.getElementById('lang-toggle');

function applyTranslation(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  if(langToggleBtn) {
    langToggleBtn.innerText = lang === 'ar' ? 'En' : 'عربي';
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translationKey = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][translationKey]) {
      const icon = element.querySelector('i');
      if (icon) {
        element.innerHTML = '';
        element.appendChild(icon);
        element.innerHTML += ' ' + translations[lang][translationKey];
      } else {
        element.innerHTML = translations[lang][translationKey];
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const translationKey = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][translationKey]) {
      element.placeholder = translations[lang][translationKey];
    }
  });

  // تحديث بيانات الـ SEO العامة بحسب اللغة والتركيز على الأجانب بمصر
  if(window.location.pathname === '/' || window.location.pathname === '') {
     if(lang === 'en') {
       updateSEO("TM Home Appliance Repair", "Contact TM to ask about home-appliance maintenance and confirm service availability in your area.", "TM appliance maintenance, home appliance repair, repair request", "");
     } else {
       updateSEO("صيانة وتصليح جميع الأجهزة المنزلية بمصر", "تواصل مع مركز TM لطلب صيانة الأجهزة المنزلية والكهربائية ومعرفة الخدمة المتاحة في منطقتك.", "صيانة ثلاجات, صيانة غسالات, اقرب مركز صيانة", "");
     }
  }
}

let currentLang = localStorage.getItem('siteLang') || 'ar';
applyTranslation(currentLang);

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = currentLang === 'ar' ? 'en' : 'ar'; 
    localStorage.setItem('siteLang', currentLang); 
    applyTranslation(currentLang);
    showToast(currentLang === 'en' ? 'Language switched to English' : 'تم تغيير اللغة إلى العربية', 'success');
  });
}

// ================= البحث اليدوي =================
const searchToggle = document.getElementById('search-toggle');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('global-search-input');
const searchResults = document.getElementById('search-results');

if(searchToggle && searchModal) {
  searchToggle.addEventListener('click', (e) => { 
    e.preventDefault(); 
    searchModal.classList.add('active'); 
    setTimeout(() => searchInput.focus(), 100); 
  });
  searchModal.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-search') || e.target === searchModal) searchModal.classList.remove('active');
  });
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    if(term.length < 2) return;
    Object.keys(devicesData).forEach(key => {
      if(devicesData[key].title.toLowerCase().includes(term) || devicesData[key].desc.toLowerCase().includes(term)) {
        searchResults.innerHTML += `<div class="search-item" onclick="navigateTo('/services/${key}'); document.getElementById('search-modal').classList.remove('active');"><i class="fa-solid fa-wrench"></i> ${devicesData[key].title}</div>`;
      }
    });
    const addedBrands = new Set();
    allBrandsList.forEach(brand => {
      const brandAr = brandsNamesArabic[brand] || "";
      if (brand.toLowerCase().includes(term) || brandAr.includes(term)) {
        if (!addedBrands.has(brand)) {
          let brandText = currentLang === 'en' ? `Repair ${brand} Appliances` : `صيانة أجهزة ${brand}`;
          searchResults.innerHTML += `<div class="search-item" onclick="navigateTo('/brand/${encodeURIComponent(brand)}'); document.getElementById('search-modal').classList.remove('active');"><i class="fa-solid fa-tag"></i> ${brandText}</div>`;
          addedBrands.add(brand);
        }
      }
    });
    Object.keys(locationsData).forEach(gov => {
      if(gov.includes(term)) {
        let govText = currentLang === 'en' ? `Maintenance Branch in ${gov}` : `فرع صيانة ${gov}`;
        searchResults.innerHTML += `<div class="search-item" onclick="navigateTo('/locations/${gov}'); document.getElementById('search-modal').classList.remove('active');"><i class="fa-solid fa-map-location-dot"></i> ${govText}</div>`;
      }
    });
  });
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('lightbox-trigger')) {
    const overlay = document.getElementById('lightbox-overlay');
    const img = document.getElementById('lightbox-img');
    if (overlay && img) { img.src = e.target.src; overlay.classList.add('active'); }
  }
  if (e.target.classList.contains('close-lightbox') || e.target.id === 'lightbox-overlay') {
    document.getElementById('lightbox-overlay').classList.remove('active');
  }
});

// ================= فلترة الماركات =================
const brandSearchInput = document.getElementById('brand-search');
const filterBtns = document.querySelectorAll('.filter-btn');
if(brandSearchInput) {
  brandSearchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.brands-grid-container .brand-card').forEach(card => {
      const name = card.getAttribute('data-brand').toLowerCase();
      card.style.display = name.includes(term) ? 'flex' : 'none';
    });
  });
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const letter = btn.getAttribute('data-letter');
      document.querySelectorAll('.brands-grid-container .brand-card').forEach(card => {
        const name = card.getAttribute('data-brand').toLowerCase();
        if(letter === 'all' || name.startsWith(letter)) card.style.display = 'flex';
        else card.style.display = 'none';
      });
    });
  });
}

const reviewsTrack = document.getElementById('reviews-track');
if(reviewsTrack) {
  let scrollAmount = 0;
  setInterval(() => {
    const scrollMax = reviewsTrack.scrollWidth - reviewsTrack.clientWidth;
    if (scrollMax > 0) {
      if(scrollAmount < scrollMax) { scrollAmount += 350; } 
      else { scrollAmount = 0; }
      reviewsTrack.style.transform = currentLang === 'ar' ? `translateX(${scrollAmount}px)` : `translateX(-${scrollAmount}px)`;
    }
  }, 4000);
}

// ================= التنقل والتوجيه المتقدم =================
const linkHome = document.getElementById('link-home');
const linkServices = document.getElementById('link-services');
const linkBrands = document.getElementById('link-brands');
const linkLocations = document.getElementById('link-locations'); 
const linkAbout = document.getElementById('link-about');

const homeSection = document.getElementById('home-section');
const servicesSection = document.getElementById('services-section');
const brandsSection = document.getElementById('brands-section');
const brandDynamicPage = document.getElementById('brand-dynamic-page'); 
const locationsSection = document.getElementById('locations-section'); 
const locationDynamicPage = document.getElementById('location-dynamic-page'); 
const aboutPageSection = document.getElementById('about-page-section');
const bookingSection = document.getElementById('booking-section');
const deviceDynamicPage = document.getElementById('device-dynamic-page'); 
const allNavLinks = document.querySelectorAll('.nav-links a:not(.nav-btn-book)');

function hideAllSections() {
  homeSection.style.display = 'none';
  servicesSection.style.display = 'none';
  if (brandsSection) brandsSection.style.display = 'none';
  if (brandDynamicPage) brandDynamicPage.style.display = 'none'; 
  if (locationsSection) locationsSection.style.display = 'none';
  if (locationDynamicPage) locationDynamicPage.style.display = 'none';
  aboutPageSection.style.display = 'none'; 
  bookingSection.style.display = 'none';
  deviceDynamicPage.style.display = 'none';
  
  allNavLinks.forEach(link => link.classList.remove('active'));

  if (document.getElementById('form-inputs-wrapper')) {
    document.getElementById('form-inputs-wrapper').style.display = 'block';
  }
  const oldSuccessMsg = document.getElementById('dynamic-success-box');
  if (oldSuccessMsg) { oldSuccessMsg.remove(); }
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) { submitBtn.style.display = 'flex'; }
}

function injectBottomCTA(containerSelector) {
  const container = document.querySelector(containerSelector);
  if(container && !container.querySelector('.bottom-cta-box')) {
    const cta = document.createElement('div');
    cta.className = 'bottom-cta-box reveal-up reveal-show';
    let titleStr = currentLang === 'en' ? 'Need appliance maintenance?' : 'هل تحتاج إلى صيانة جهازك؟';
    let descStr = currentLang === 'en' ? 'Contact us to confirm service availability and next steps.' : 'تواصل معنا لتأكيد الخدمة المتاحة والخطوة التالية.';
    let btnStr = currentLang === 'en' ? 'Request service' : 'اطلب صيانة';
    
    cta.innerHTML = `
      <h3>${titleStr}</h3>
      <p>${descStr}</p>
      <button class="btn-primary trigger-booking" style="display:inline-flex; background:#FFC107; color:#0f172a; border:none; padding: 15px 40px; margin-top:15px; font-size: 20px; cursor: pointer;">${btnStr}</button>
    `;
    container.appendChild(cta);
  }
}

window.navigateTo = function(path) {
  window.history.pushState({}, '', path);
  handleRouting();
};

function escapeHtml(value) {
  return String(value).replace(/[&<>\"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[ch]));
}

function handleRouting() {
  let path = window.location.pathname;
  if (path.length > 1 && path.endsWith('/')) { path = path.slice(0, -1); }
  hideAllSections();

  if (path === '/services') {
    servicesSection.style.display = 'block';
    if(linkServices) linkServices.classList.add('active');
    updateSEO(currentLang==='en'?"Maintenance Services":"خدمات الصيانة", "", "", "services");
  } 
  else if (path === '/brands') {
    if (brandsSection) brandsSection.style.display = 'block';
    if (linkBrands) linkBrands.classList.add('active');
    updateSEO(currentLang==='en'?"Brands we can discuss":"الماركات", "", "", "brands");
  }
  else if (path === '/locations') {
    if (locationsSection) locationsSection.style.display = 'block';
    if (linkLocations) linkLocations.classList.add('active');
    updateSEO(currentLang==='en'?"Coverage Areas":"مناطق التغطية", "", "", "locations");
  }
  else if (path === '/about') {
    aboutPageSection.style.display = 'block';
    if(linkAbout) linkAbout.classList.add('active');
    updateSEO(currentLang==='en'?"About Us":"من نحن", "", "", "about");
  } 
  else if (path === '/booking') {
    bookingSection.style.display = 'flex';
    updateSEO(currentLang==='en'?"Book an Appointment":"احجز موعد صيانة", "", "", "booking");
  } 
  else if (path.startsWith('/brand/')) {
    const brandName = decodeURIComponent(path.split('/brand/')[1]);
    document.querySelectorAll('.dyn-brand-name').forEach(el => { el.innerText = brandName; });
    const dynBrandWhatsapp = document.getElementById('dyn-brand-whatsapp');
    if(dynBrandWhatsapp) {
      let waText = currentLang === 'en' ? `I want to book a repair for my ${brandName} appliance` : `عايز أحجز صيانة أجهزة ${brandName}`;
      dynBrandWhatsapp.href = "https://wa.me/201127893459?text=" + encodeURIComponent(waText);
    }
    if (brandDynamicPage) { 
      brandDynamicPage.style.display = 'block'; 
      injectBottomCTA('#brand-dynamic-page .brand-long-text');
    }
    
    // سيو أجنبي ومصري لصفحة البراند الأساسية
    let titleStr = currentLang === 'en' ? `${brandName} appliance repair information` : `معلومات صيانة أجهزة ${brandName}`;
    let descStr = currentLang === 'en' ? `Contact TM to discuss repair options for ${brandName} appliances and confirm availability.` : `تواصل معنا للاستفسار عن صيانة أجهزة ${brandName} وتأكيد التوافر.`;
    let keysStr = currentLang === 'en' ? `${brandName} repair Egypt, fix ${brandName} appliances` : `صيانة ${brandName}, مركز ${brandName}`;
    updateSEO(titleStr, descStr, keysStr, `brand/${brandName}`);
  }
  else if (path.startsWith('/locations/')) {
    const govName = decodeURIComponent(path.split('/locations/')[1]);
    document.querySelectorAll('.dyn-gov-name').forEach(el => { el.innerText = govName; });
    const dynGovWhatsapp = document.getElementById('dyn-gov-whatsapp');
    if(dynGovWhatsapp) {
      let waText = currentLang === 'en' ? `I want to book an appliance repair in ${govName}` : `عايز أحجز صيانة أجهزة منزلية في محافظة ${govName}`;
      dynGovWhatsapp.href = "https://wa.me/201127893459?text=" + encodeURIComponent(waText);
    }
    if (locationDynamicPage) { 
      locationDynamicPage.style.display = 'block'; 
      injectBottomCTA('#location-dynamic-page .brand-long-text');
    }
    
    // سيو أجنبي ومصري لصفحة المحافظة الأساسية
    let titleStr = currentLang === 'en' ? `Service availability in ${govName}` : `تأكيد توفر الخدمة في ${govName}`;
    let descStr = currentLang === 'en' ? `Contact TM to confirm whether appliance service is available in ${govName}.` : `تواصل معنا لتأكيد إمكانية تقديم الخدمة في ${govName}.`;
    let keysStr = currentLang === 'en' ? `appliance repair ${govName}, fix home appliances ${govName}` : `صيانة اجهزة منزلية ${govName}, مركز صيانة ${govName}`;
    updateSEO(titleStr, descStr, keysStr, `locations/${govName}`);
  }
  else if (path.startsWith('/services/')) {
    const parts = path.split('/');
    const deviceKey = parts[2];
    let brandName = "";
    let locationName = "";
    if (parts[3] === 'brand' && parts[4]) { brandName = decodeURIComponent(parts[4]); } 
    else if (parts[3] === 'location' && parts[4]) { locationName = decodeURIComponent(parts[4]); }

    const selectedData = devicesData[deviceKey];

    if (selectedData) {
      let baseDevice = selectedData.shortName || selectedData.title.split('..')[0].replace('صيانة ', '').trim();
      let displayTitle = selectedData.title;
      let seoFinalTitle = selectedData.seoTitle;
      let seoFinalDesc = selectedData.seoDesc;
      let seoFinalKeywords = selectedData.seoKeywords;

      // سيو متقدم ومزدوج (ماركة / محافظة)
      if (brandName) {
         if (currentLang === 'en') {
             displayTitle = `${brandName} ${baseDevice} Repair`;
             seoFinalTitle = `Specialized ${brandName} ${baseDevice} Repair in Egypt`;
             seoFinalDesc = `Contact TM to discuss ${brandName} ${baseDevice} repair options and confirm availability.`;
             seoFinalKeywords = `${brandName} repair Egypt, ${brandName} maintenance, fix ${brandName} ${baseDevice}`;
         } else {
             displayTitle = `صيانة ${baseDevice} ${brandName}`;
             seoFinalTitle = `صيانة ${baseDevice} ${brandName}`;
             seoFinalDesc = `تواصل مع مركز TM للاستفسار عن صيانة ${baseDevice} ${brandName} وتأكيد التوافر قبل ترتيب الخدمة.`;
             seoFinalKeywords = `صيانة ${baseDevice} ${brandName}, مركز صيانة ${brandName}, مركز ${brandName}`;
         }
      }
      if (locationName) {
         if (currentLang === 'en') {
             displayTitle = `${baseDevice} Repair in ${locationName}`;
             seoFinalTitle = `Specialized ${baseDevice} Repair in ${locationName}, Egypt`;
             seoFinalDesc = `Contact TM to confirm whether ${baseDevice} service is available in ${locationName}.`;
             seoFinalKeywords = `${baseDevice} repair ${locationName}, fix ${baseDevice} ${locationName}, maintenance ${locationName}`;
         } else {
             displayTitle = `مركز صيانة ${baseDevice} في ${locationName}`;
             seoFinalTitle = `صيانة ${baseDevice} في ${locationName}`;
             seoFinalDesc = `تواصل مع مركز TM لتأكيد إمكانية تقديم خدمة ${baseDevice} في ${locationName}.`;
             seoFinalKeywords = `صيانة ${baseDevice} ${locationName}, مركز صيانة ${locationName}, ارقام صيانة ${locationName}`;
         }
      }

      let displayDesc = selectedData.desc;
      if (locationName) {
          if (currentLang === 'en') {
              displayDesc = `<strong>Service availability in ${escapeHtml(locationName)}:</strong> Availability depends on the appliance and area. Contact TM to confirm coverage and appointment options before arranging a visit.<br><br>` + displayDesc;
          } else {
              displayDesc = `<strong>تأكيد الخدمة في ${escapeHtml(locationName)}:</strong> تختلف إمكانية الخدمة بحسب موقعك ونوع الجهاز. تواصل معنا للتأكد من التغطية والموعد قبل ترتيب الزيارة.<br><br>` + displayDesc;
          }
      }

      document.getElementById('dyn-title').innerText = displayTitle;
      document.getElementById('dyn-desc').innerHTML = displayDesc;
      
      const dynImg = document.getElementById('dyn-img');
      dynImg.src = selectedData.image;
      dynImg.alt = currentLang === 'en' ? `Technician repairing ${displayTitle}` : `صورة فني يقوم بـ ` + displayTitle; 
      
      const faultsList = document.getElementById('dyn-faults-list');
      faultsList.innerHTML = ''; 
      selectedData.faults.forEach(fault => {
        const li = document.createElement('li');
        li.innerText = fault;
        faultsList.appendChild(li);
      });

      const extrasContainer = document.getElementById('dyn-extras-container');
      const extrasList = document.getElementById('dyn-extras-list');
      if (extrasContainer && extrasList) {
        extrasList.innerHTML = '';
        if (selectedData.extraServices && selectedData.extraServices.length > 0) {
          selectedData.extraServices.forEach(ext => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-check-double"></i> ${ext}`;
            extrasList.appendChild(li);
          });
          extrasContainer.style.display = 'block';
        } else { extrasContainer.style.display = 'none'; }
      }

      const faqsContainer = document.getElementById('dyn-faqs-container');
      const faqsList = document.getElementById('dyn-faqs-list');
      if (faqsContainer && faqsList) {
        faqsList.innerHTML = '';
        if (selectedData.faqs && selectedData.faqs.length > 0) {
          selectedData.faqs.forEach(faq => {
            const faqDiv = document.createElement('div');
            faqDiv.className = 'dyn-faq-item';
            faqDiv.innerHTML = `<div class="dyn-faq-question" role="button" tabindex="0" aria-expanded="false"><h4>${faq.q}</h4><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></div><div class="dyn-faq-answer"><p>${faq.a}</p></div>`;
            faqsList.appendChild(faqDiv);
          });
          faqsContainer.style.display = 'block';
          faqsList.querySelectorAll('.dyn-faq-question').forEach(question => {
            question.addEventListener('click', () => {
              const currentItem = question.parentElement;
              faqsList.querySelectorAll('.dyn-faq-item').forEach(item => {
                if (item !== currentItem) {
                  item.classList.remove('active');
                  const otherControl = item.querySelector('.dyn-faq-question');
                  if (otherControl) otherControl.setAttribute('aria-expanded', 'false');
                }
              });
              const opened = !currentItem.classList.contains('active');
              currentItem.classList.toggle('active', opened);
              question.setAttribute('aria-expanded', String(opened));
            });
          });
        } else { faqsContainer.style.display = 'none'; }
      }
      
      const whatsappBaseUrl = "https://wa.me/201127893459?text=";
      let finalWaMsg = selectedData.whatsappMessage;
      if (currentLang === 'en') {
          finalWaMsg = `I want to book a ${baseDevice} repair`;
          if (brandName) finalWaMsg += ` for brand ${brandName}`;
          if (locationName) finalWaMsg += ` in ${locationName}`;
      } else {
          if (brandName) finalWaMsg += ` ماركة ${brandName}`;
          if (locationName) finalWaMsg += ` في محافظة ${locationName}`;
      }
      document.getElementById('dyn-whatsapp').href = whatsappBaseUrl + encodeURIComponent(finalWaMsg);

      const oldInjection = document.getElementById('injected-options-section');
      if (oldInjection) oldInjection.remove();

      let dynamicOptionsHTML = document.createElement('div');
      dynamicOptionsHTML.id = 'injected-options-section';
      dynamicOptionsHTML.style.cssText = 'margin-top: 40px; padding-top: 30px; margin-bottom: 30px;';
      
      let htmlInner = '';
      let locTitleStr = currentLang === 'en' ? `Choose your governorate for faster ${baseDevice} repair:` : `اختر محافظتك لصيانة ${baseDevice} أسرع:`;
      
      htmlInner += `<div style="border-top: 2px solid #e2e8f0; padding-top: 30px; margin-bottom: 40px;">
        <h3 style="font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 20px; display:flex; align-items:center; gap:10px;"><i class="fa-solid fa-map-location-dot" style="color: #10b981;"></i> ${locTitleStr}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 15px;">`;
      
      Object.keys(locationsData).forEach(gov => {
        const isActive = gov === locationName ? 'border-color: #10b981; background: #ecfdf5; box-shadow: 0 5px 15px rgba(16,185,129,0.2);' : 'border-color: #e2e8f0; background: white;';
        htmlInner += `<div class="brand-card hover-3d" style="${isActive} border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px; text-align: center; cursor: pointer; transition: 0.3s;" role="button" tabindex="0" onclick="navigateTo('/services/${deviceKey}/location/${encodeURIComponent(gov)}')"><h4 style="margin:0; color:#475569; font-weight:800; font-size:16px;">${gov}</h4></div>`;
      });
      htmlInner += `</div></div>`;

      let brandTitleStr = currentLang === 'en' ? `Choose your appliance brand for specialized repair:` : `اختر ماركة جهازك لصيانة متخصصة:`;
      htmlInner += `<div style="border-top: 2px solid #e2e8f0; padding-top: 30px;">
        <h3 style="font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 20px; display:flex; align-items:center; gap:10px;"><i class="fa-solid fa-tags" style="color: #0ea5e9;"></i> ${brandTitleStr}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 15px;">`;
      
      allBrandsList.forEach(brand => {
        const isActive = brand === brandName ? 'border-color: #0ea5e9; background: #f0f9ff; box-shadow: 0 5px 15px rgba(14,165,233,0.2);' : 'border-color: #e2e8f0; background: white;';
        htmlInner += `<div class="brand-card hover-3d" style="${isActive} border: 1px solid #e2e8f0; border-radius: 10px; padding: 15px; text-align: center; cursor: pointer; transition: 0.3s;" onclick="navigateTo('/services/${deviceKey}/brand/${encodeURIComponent(brand)}')"><h4 style="margin:0; color:#475569; font-weight:800; font-size:16px;">${brand}</h4></div>`;
      });
      htmlInner += `</div></div>`;

      dynamicOptionsHTML.innerHTML = htmlInner;

      const devicePageContainer = document.getElementById('device-dynamic-page');
      const dynamicTextContainer = devicePageContainer.querySelector('.dynamic-text');
      const dynButtons = dynamicTextContainer.querySelector('.dynamic-buttons');
      if(dynButtons) dynamicTextContainer.insertBefore(dynamicOptionsHTML, dynButtons);
      else dynamicTextContainer.appendChild(dynamicOptionsHTML);

      deviceDynamicPage.style.display = 'flex';
      injectBottomCTA('#device-dynamic-page .dynamic-text');
      updateSEO(seoFinalTitle, seoFinalDesc, seoFinalKeywords, path.substring(1));
      
    } else {
      homeSection.style.display = 'block';
      if(linkHome) linkHome.classList.add('active');
      updateSEO(currentLang==='en'?"Home":"الرئيسية", "", "", "");
    }
  } 
  else {
    homeSection.style.display = 'block';
    if(linkHome) linkHome.classList.add('active');
    updateSEO(currentLang==='en'?"Home":"الرئيسية", "", "", "");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('load', handleRouting);
window.addEventListener('popstate', handleRouting);

document.addEventListener('click', function(e) {
  const triggerDevice = e.target.closest('.trigger-device');
  if (triggerDevice) { e.preventDefault(); navigateTo('/services/' + triggerDevice.getAttribute('data-device')); return; }
  const triggerBrand = e.target.closest('.trigger-brand');
  if (triggerBrand) { e.preventDefault(); navigateTo('/brand/' + encodeURIComponent(triggerBrand.getAttribute('data-brand'))); return; }
  const triggerLocation = e.target.closest('.trigger-location');
  if (triggerLocation) { e.preventDefault(); navigateTo('/locations/' + encodeURIComponent(triggerLocation.getAttribute('data-gov'))); return; }
  const triggerBooking = e.target.closest('.trigger-booking');
  if (triggerBooking && !e.target.closest('button.close-exit-btn')) { e.preventDefault(); navigateTo('/booking'); document.getElementById('exit-intent-modal')?.classList.add('hidden'); return; }
  if (e.target.closest('.close-exit-modal') || e.target.closest('.close-exit-btn')) { document.getElementById('exit-intent-modal')?.classList.add('hidden'); }
  const link = e.target.closest('a[href]');
  if (link) {
    const href = link.getAttribute('href');
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
    if (href.startsWith('#')) {
      const target = document.getElementById(href.slice(1));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      return;
    }
    e.preventDefault();
    let newPath = href === '/' ? '/' : href;
    navigateTo(newPath);
  }
});

const locationsGrid = document.getElementById('locations-grid');
if (locationsGrid) {
  Object.keys(locationsData).forEach(gov => {
    const card = document.createElement('div');
    card.className = 'brand-card trigger-location';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-gov', gov);
    card.setAttribute('tabindex', '0'); 
    card.innerHTML = `<h3>${gov}</h3>`;
    locationsGrid.appendChild(card);
  });
}

const govSelect = document.getElementById('gov-select');
const areaSelect = document.getElementById('area-select');
const streetInput = document.getElementById('street-input');
const streetsList = document.getElementById('streets-list');
const areaGroup = document.getElementById('area-group');
const streetGroup = document.getElementById('street-group');
const genericAddressGroup = document.getElementById('generic-address-group');

if (govSelect) {
  govSelect.addEventListener('change', function() {
    const selectedGov = this.value;
    areaSelect.innerHTML = currentLang === 'en' ? '<option value="" disabled selected>Choose Area...</option>' : '<option value="" disabled selected>اختر المنطقة...</option>';
    streetInput.value = '';
    streetsList.innerHTML = '';
    streetGroup.style.display = 'none';

    if (locationsData[selectedGov]) {
      Object.keys(locationsData[selectedGov]).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.innerText = area;
        areaSelect.appendChild(option);
      });
      areaGroup.style.display = 'block';
      genericAddressGroup.style.display = 'none';
      document.getElementById('generic-address-input').removeAttribute('required');
      areaSelect.setAttribute('required', 'required');
      streetInput.setAttribute('required', 'required');
    } else {
      areaGroup.style.display = 'none';
      streetGroup.style.display = 'none';
      genericAddressGroup.style.display = 'block';
      document.getElementById('generic-address-input').setAttribute('required', 'required');
      areaSelect.removeAttribute('required');
      streetInput.removeAttribute('required');
    }
  });
}

if (areaSelect) {
  areaSelect.addEventListener('change', function() {
    const selectedGov = govSelect.value;
    const selectedArea = this.value;
    streetInput.value = '';
    streetsList.innerHTML = '';
    if (locationsData[selectedGov] && locationsData[selectedGov][selectedArea]) {
      locationsData[selectedGov][selectedArea].forEach(street => {
        const option = document.createElement('option');
        option.value = street;
        streetsList.appendChild(option);
      });
      streetGroup.style.display = 'block';
    } else {
      streetGroup.style.display = 'none';
    }
  });
}

const bookingForm = document.getElementById('booking-form');
const submitBtn = document.getElementById('submit-btn');
const formInputsWrapper = document.getElementById('form-inputs-wrapper');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const status = document.getElementById('booking-status');
    const honeypot = bookingForm.querySelector('input[name="honeypot"]');
    if (honeypot && honeypot.value.trim()) return;

    const nameField = bookingForm.querySelector('#full_name');
    const phoneField = bookingForm.querySelector('#phone_number');
    const name = (nameField?.value || '').trim();
    const phone = (phoneField?.value || '').trim();
    const phoneDigits = phone.replace(/\D/g, '');
    const phoneIsValid = /^01[0125]\d{8}$/.test(phoneDigits);

    if (name.length < 3) {
      nameField?.setCustomValidity('اكتب الاسم بصورة صحيحة.');
      nameField?.reportValidity();
      nameField?.addEventListener('input', () => nameField.setCustomValidity(''), { once: true });
      return;
    }
    if (!phoneIsValid) {
      phoneField?.setCustomValidity('أدخل رقم موبايل مصريًا من 11 رقمًا يبدأ بـ 010 أو 011 أو 012 أو 015.');
      phoneField?.reportValidity();
      phoneField?.addEventListener('input', () => phoneField.setCustomValidity(''), { once: true });
      return;
    }
    if (!bookingForm.reportValidity()) return;

    const fieldValue = (id) => {
      const el = bookingForm.querySelector('#' + id);
      return el ? el.value.trim() : '';
    };
    const details = [
      'طلب صيانة من موقع مركز TM',
      `الاسم: ${name}`,
      `رقم التواصل: ${phoneDigits}`,
      `الجهاز: ${fieldValue('device_type')}`,
      `الماركة: ${fieldValue('brand_type')}`,
      `المحافظة: ${fieldValue('gov-select')}`,
      `المنطقة: ${fieldValue('area-select')}`,
      `الشارع: ${fieldValue('street-input')}`,
      `العنوان: ${fieldValue('generic-address-input')}`,
      `وصف العطل: ${fieldValue('fault-desc') || 'لم يذكر'}`
    ].filter(line => !line.endsWith(': '));
    const message = details.join('\n');
    const whatsappUrl = 'https://wa.me/201127893459?text=' + encodeURIComponent(message);

    if (status) {
      status.className = 'booking-status is-visible';
      status.textContent = 'تم تجهيز تفاصيل الطلب. راجع رسالة واتساب التي ستفتح واضغط «إرسال» لإتمام التواصل؛ لم يُرسل الطلب تلقائيًا من الموقع.';
    }
    if (submitBtn) {
      submitBtn.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> فتح واتساب بالطلب';
      submitBtn.setAttribute('aria-label', 'فتح واتساب ومراجعة طلب الصيانة');
    }
    const opened = window.open('about:blank', '_blank');
    if (opened) { opened.opener = null; opened.location.href = whatsappUrl; }
    if (!opened) {
      if (status) status.textContent += ' إذا لم تفتح نافذة واتساب، استخدم رابط واتساب التالي لإرسال التفاصيل.';
      const existing = bookingForm.querySelector('.tm-wa-fallback');
      if (!existing) {
        const link = document.createElement('a');
        link.className = 'tm-wa-fallback';
        link.href = whatsappUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'متابعة الطلب عبر واتساب';
        bookingForm.appendChild(link);
      }
    }
  });
}

// Accessible interaction support for custom cards and accordion controls.
document.querySelectorAll('.faq-question').forEach((question, index) => {
  const item = question.closest('.faq-item');
  const answer = item ? item.querySelector('.faq-answer') : null;
  if (answer && !answer.id) answer.id = `tm-faq-answer-${index + 1}`;
  if (answer) { question.setAttribute('aria-controls', answer.id); answer.setAttribute('aria-hidden', 'true'); }
  question.setAttribute('aria-expanded', 'false');
  question.addEventListener('click', () => {
    if (!item) return;
    const willOpen = !item.classList.contains('active');
    document.querySelectorAll('.faq-item.active').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('active');
        const control = openItem.querySelector('.faq-question');
        if (control) control.setAttribute('aria-expanded', 'false');
        const otherAnswer = openItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.setAttribute('aria-hidden', 'true');
      }
    });
    item.classList.toggle('active', willOpen);
    question.setAttribute('aria-expanded', String(willOpen));
    if (answer) answer.setAttribute('aria-hidden', String(!willOpen));
    if (willOpen) item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
});

document.addEventListener('keydown', (event) => {
  const control = event.target.closest('[role="button"][tabindex="0"]');
  if (!control || control.matches('input, textarea, select, button, a')) return;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    control.click();
  }
});

// ================= التأثيرات والشريط العلوي والـ Dark Mode =================
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const progress = document.getElementById('scroll-progress');
  if (navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 50);
  if (progress) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progress.style.width = Math.max(0, Math.min(100, scrolled)) + '%';
  }
});

const darkModeBtn = document.getElementById('dark-mode-toggle');
if(darkModeBtn) {
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  darkModeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

window.addEventListener('load', () => {
  const loader = document.getElementById('tm-loader');
  if(loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => { loader.style.display = 'none'; }, 600);
    }, 400);
  }
});

// ================= العدادات =================
const counters = document.querySelectorAll('.counter-value');
const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / 80;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};
const counterSection = document.querySelector('.counters-section');
if(counterSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      animateCounters();
      counterObserver.disconnect();
    }
  }, { threshold: 0.4 });
  counterObserver.observe(counterSection);
}

document.addEventListener("DOMContentLoaded", function() {
  if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
  const animatedElements = document.querySelectorAll(`
    .feat-card, .service-card-lg, .service-card-sm, .detailed-card, 
    .team-card, .faq-item, .about-text, .about-image, .warranty-banner, 
    .brand-card, .section-header-center, .hero-content, .booking-container,
    .brand-long-text, .brand-gallery-sidebar, .bd-card, .mv-card, .principle-card, .timeline-step,
    .brand-fault-card, .home-service-highlight, .review-card, .counter-box
  `);
  animatedElements.forEach((el, index) => {
    el.classList.add('reveal-up');
    if(index % 3 === 1) el.style.transitionDelay = '0.1s';
    if(index % 3 === 2) el.style.transitionDelay = '0.2s';
  });
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
  animatedElements.forEach(el => scrollObserver.observe(el));
});

// ================= الموبايل منيو والبحث الصوتي =================
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-swipe-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
  closeMobileMenu.addEventListener('click', () => mobileMenu.classList.remove('active'));
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) mobileMenu.classList.remove('active');
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('active'));
  });
}

const voiceBtn = document.getElementById('voice-search-btn');
if (voiceBtn) {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === 'ar' ? 'ar-EG' : 'en-US'; 
    voiceBtn.addEventListener('click', () => {
      recognition.lang = document.documentElement.lang === 'ar' ? 'ar-EG' : 'en-US';
      recognition.start();
      voiceBtn.innerHTML = '<i class="fa-solid fa-microphone-lines fa-fade"></i>';
    });
    recognition.onresult = (e) => {
      const searchInput = document.getElementById('global-search-input');
      if (searchInput) {
        searchInput.value = e.results[0][0].transcript;
        searchInput.dispatchEvent(new Event('input'));
      }
      voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
    };
    recognition.onerror = () => voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
  } else {
    voiceBtn.style.display = 'none';
  }
}

// ================= مساعد الصيانة (Chatbot مترجم) =================
const chatToggle = document.getElementById('chatbot-toggle');
const chatWindow = document.getElementById('chatbot-window');
const chatClose = document.getElementById('close-chatbot');
const chatInputField = document.getElementById('chat-input-field');
const chatSendBtn = document.getElementById('send-chat-btn');
const chatMessagesArea = document.getElementById('chatbot-messages');

if (chatToggle && chatWindow) {
  chatToggle.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
  if (chatClose) chatClose.addEventListener('click', () => chatWindow.classList.add('hidden'));
  
  const appendChatMessage = (text, sender) => {
    if (!chatMessagesArea) return;
    const node = document.createElement('div');
    node.className = sender === 'user' ? 'msg-user' : 'msg-bot';
    node.textContent = text;
    node.style.cssText = sender === 'user'
      ? 'background:#1769aa;color:#fff;padding:10px 15px;border-radius:15px 15px 15px 0;align-self:flex-end;font-size:14px;max-width:85%;margin-top:10px;line-height:1.6;overflow-wrap:anywhere;'
      : 'background:#e6f1fa;color:#153b5d;padding:10px 15px;border-radius:15px 15px 0 15px;align-self:flex-start;font-size:14px;max-width:85%;margin-top:10px;line-height:1.6;overflow-wrap:anywhere;';
    chatMessagesArea.appendChild(node);
    chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;
  };

  const botReply = (msg) => {
    if (chatMessagesArea) {
      const typingIndicator = document.getElementById('typing-indicator');
      if (typingIndicator) typingIndicator.remove();
      appendChatMessage(msg, 'bot');
    }
  };

  const showTyping = () => {
    if (chatMessagesArea) {
      let typingText = currentLang === 'en' ? "Typing..." : "جاري الكتابة...";
      const indicator = document.createElement('div');
      indicator.id = 'typing-indicator';
      indicator.className = 'msg-bot';
      indicator.textContent = typingText;
      indicator.style.cssText = 'background:#e6f1fa;color:#153b5d;padding:10px 15px;border-radius:15px 15px 0 15px;align-self:flex-start;font-size:14px;max-width:85%;margin-top:10px;';
      chatMessagesArea.appendChild(indicator);
      chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;
    }
  };

  if (chatSendBtn && chatInputField) {
    const handleChat = () => {
      let txt = chatInputField.value.trim();
      if (!txt) return;
      appendChatMessage(txt, 'user');
      chatInputField.value = '';
      chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;
      showTyping();

      setTimeout(() => {
        let response = '';
        const userMsg = txt.toLowerCase();

        if (currentLang === 'ar') {
            if (userMsg.match(/اهلا|سلام|مرحبا|هاي|صباح|مساء|عامل ايه|ازيك|هلا|عاملين|اخبار/)) {
              response = 'يا أهلاً بيك يا فندم في مركز TM لصيانة الأجهزة المنزلية. نورتنا! أقدر أخدم حضرتك إزاي النهاردة؟';
            } else if (userMsg.match(/غسالة|غساله|مبتعصرش|بتسرب|مبتسحبش|غسيل/)) {
              response = 'تختلف أسباب عطل الغسالة حسب الموديل والأعراض. اذكر الماركة ووصف المشكلة، وتواصل معنا لتأكيد إمكانية الفحص والموعد المتاح.';
            } else if (userMsg.match(/ثلاجة|تلاجة|فريزر|تبريد|ثلج|مبتسقعش|ماتور|كباس/)) {
              response = 'قد يرتبط ضعف التبريد بأكثر من سبب. اذكر نوع الثلاجة والعطل، وتواصل معنا لتأكيد إمكانية الفحص والموعد.';
            } else if (userMsg.match(/تكييف|مكيف|بينقط|مبيبردش/)) {
              response = 'قد يحتاج التكييف إلى فحص بحسب العَرَض. تواصل معنا لتأكيد إمكانية الخدمة في منطقتك وترتيب الموعد.';
            } else if (userMsg.match(/شاشة|شاشه|تلفزيون|ليدات/)) {
              response = 'تختلف أعطال الشاشات بحسب الموديل والعَرَض. اذكر التفاصيل عند التواصل لمعرفة خيارات الفحص المتاحة.';
            } else if (userMsg.match(/سعر|بكام|تكلفة|مصنعية|اسعار|فلوس/)) {
              response = 'قد يلزم فحص الجهاز لتحديد السبب والتكلفة. اسأل عن رسوم الفحص والتكلفة المتوقعة قبل الموافقة على الإصلاح.';
            } else {
              response = 'يمكنك الاتصال أو استخدام نموذج واتساب لإرسال تفاصيل الجهاز. تأكيد الموعد يتم بعد التواصل المباشر.';
            }
        } else {
            if (userMsg.match(/hello|hi|hey|morning|evening|how are you/)) {
              response = 'Hello! Tell me the appliance type and issue. I can guide you to the right contact option; this is not a technical diagnosis.';
            } else if (userMsg.match(/washer|washing machine|spin|leak|wash/)) {
              response = 'Please share the appliance model and issue, then contact us to confirm service availability and appointment options.';
            } else if (userMsg.match(/fridge|refrigerator|freezer|cooling|ice|compressor/)) {
              response = 'A fridge issue can have several causes. Share the appliance model and issue, then contact us to confirm service availability.';
            } else if (userMsg.match(/ac|air condition|leak|hot air/)) {
              response = 'AC symptoms vary by model. Contact us to discuss the issue and confirm whether service is available in your area.';
            } else if (userMsg.match(/tv|screen|television|led/)) {
              response = 'Screen issues depend on the model and symptoms. Contact us with the details to discuss inspection options.';
            } else if (userMsg.match(/price|cost|how much|fee|expensive/)) {
              response = 'To be completely transparent, the engineer must inspect the appliance first to quote the exact cost. We don\'t start working until you approve. Shall we send a technician for inspection?';
            } else {
              response = 'Please contact TM with the appliance type and issue to confirm available service and appointment options.';
            }
        }
        botReply(response);
      }, 1500); 
    };

    chatSendBtn.addEventListener('click', handleChat);
    chatInputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleChat();
    });
  }
}

// ================= حل مشكلة ظهور الصور (Skeleton Loading) =================
function showAllImages() {
  document.querySelectorAll('.skeleton-img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
}

document.addEventListener("DOMContentLoaded", showAllImages);
window.addEventListener('load', showAllImages);
window.addEventListener('popstate', () => setTimeout(showAllImages, 150));