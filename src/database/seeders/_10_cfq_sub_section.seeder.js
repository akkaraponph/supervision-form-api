module.exports = {
	up: async (queryInterface) => {
		seedData = [

			// ตอนที่  1  การตรวจสอบองค์ประกอบของหลักสูตรสถานศึกษา : กรอบสาระท้องถิ่น  มาตรฐานสากล 
			// จุดเน้นการจัดการศึกษาเพื่อการมีงานทำ 
			{
				id: "108609d2-8f37-44ff-b6d1-000001c00001",
				priority: "1.1.1",
				question: 'แสดงความเชื่อมโยงระหว่างหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช  2551 และฉบับปรับปรุง พ.ศ.  2560 กรอบหลักสูตรระดับท้องถิ่น จุดเน้น และความต้องการของโรงเรียน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000002c00001",
				priority: "1.2.1",
				question: '1.2.1  แสดงภาพอนาคตของผู้เรียนที่สอดคล้องกับวิสัยทัศน์ของหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช  2551  ประเทศไทย 4.0  โลกในศตวรรษที่  21 และทัดเทียมกับนานาชาติ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000002c00002",
				priority: "1.2.2",
				question: '1.2.2  แสดงภาพอนาคตของผู้เรียนสอดคล้องกับกรอบหลักสูตรระดับท้องถิ่น',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000002c00003",
				priority: "1.2.3",
				question: '1.2.3 แสดงภาพอนาคตของผู้เรียน ครอบคลุมสภาพความต้องการของโรงเรียน ชุมชน ท้องถิ่น ฯลฯ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000002c00004",
				priority: "1.2.4",
				question: '1.2.4   มีความชัดเจน สามารถปฏิบัติได้',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000003c00001",
				priority: "1.3.1",
				question: 'มีความสอดคล้องกับหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช  2551',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000004c00001",
				priority: "1.4.1",
				question: '1.4.1 มีความสอดคล้องกับหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช  2551',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00004"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000004c00002",
				priority: "1.4.2",
				question: '1.4.2 มีความสอดคล้องกับเป้าหมายและจุดเน้นของกรอบหลักสูตรระดับท้องถิ่น และโรงเรียน เช่น โรงเรียนในเขตพื้นที่พิเศษ โรงเรียนชายแดน โรงเรียนวัตถุประสงค์พิเศษฯลฯ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00004"
			},
			{
				id: "108609d2-8f37-44ff-b6d1-000004c00003",
				priority: "1.4.3",
				question: '1.4.3 สอดคล้องกับวิสัยทัศน์ของโรงเรียน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000001c00004"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000001c00001",
				priority: "2.1.1",
				question: '2.1.1  ระบุรายวิชาพื้นฐาน 8 กลุ่มสาระการเรียนรู้ตามหลักสูตรแกนการศึกษาขั้นพื้นฐาน จำแนกแต่ละชั้นปี / ช่วงชั้น (ม.ปลาย) อย่างชัดเจน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000001c00002",
				priority: "2.1.2",
				question: '2.1.2  บูรณาการกรอบสาระท้องถิ่นกับรายวิชาพื้นฐาน 8 กลุ่มสาระการเรียนรู้จำแนกแต่ละชั้นปี/   ช่วงชั้น (ม.ปลาย) อย่างชัดเจน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000001c00003",
				priority: "2.1.3",
				question: '2.1.3  บูรณการการจัดการศึกษาเพื่อการมีงานทำกับรายวิชาพื้นฐาน 8 กลุ่มสาระการเรียนรู้จำแนกแต่ละชั้นปี / ช่วงชั้น (ม.ปลาย) อย่างชัดเจน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000002c00001",
				priority: "2.2.1",
				question: '2.2.1  มีระบุรายวิชาเพิ่มเติม จำแนกแต่ละชั้นปี / ช่วงชั้น (ม.ปลาย) อย่างชัดเจน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000002c00002",
				priority: "2.2.2",
				question: '2.2.2 มีระบุรายวิชาเพิ่มเติม Independent Study : IS',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000002c00003",
				priority: "2.2.3",
				question: '2.2.3  มีระบุรายวิชาเพื่อการมีงานทำ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000002c00004",
				priority: "2.2.4",
				question: '2.2.4 มีระบุรายวิชาตามความสนใจของนักเรียน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000003c00001",
				priority: "2.3.1",
				question: '2.3.1 มีการระบุรายวิชาพื้นฐานทั้ง 8 กลุ่มสาระการเรียนรู้ พร้อมทั้งระบุเวลาเรียนและ/หรือหน่วยกิต',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000003c00002",
				priority: "2.3.2",
				question: '2.3.2 มีการระบุรายวิชาเพิ่มเติมที่สถานศึกษา กำหนด พร้อมทั้งระบุเวลาเรียนและ/หรือหน่วยกิต',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000003c00003",
				priority: "2.3.3",
				question: '2.3.3  มีการระบุกิจกรรมพัฒนาผู้เรียน พร้อมทั้งระบุเวลาเรียนตามเกณฑ์ที่หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช  2551 ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000003c00004",
				priority: "2.3.4",
				question: '2.3.4  มีรายวิชาพื้นฐานและรายวิชาเพิ่มเติมที่ระบุรหัสวิชาและชื่อรายวิชา ไว้อย่างถูกต้องชัดเจน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000003c00005",
				priority: "2.3.5",
				question: '2.3.5  มีรายวิชาเพิ่มเติม/กิจกรรมเพิ่มเติม สอดคล้องกับวิสัยทัศน์และจุดเน้นของโรงเรียน ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000002c00003"
			},
			// 4.1 โรงเรียนได้สนับสนุนและส่งเสริมให้ครูจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education) ในกลุ่มสาระการเรียนรู้ใดบ้าง
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00001",
				priority: "2.4.1",
				question: 'วิทยาศาสตร์',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00002",
				priority: "2.4.2",
				question: 'คณิตศาสตร์',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00003",
				priority: "2.4.3",
				question: 'ภาษาไทย',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00004",
				priority: "2.4.4",
				question: 'ศิลปะ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00005",
				priority: "2.4.5",
				question: 'สังคมศึกษาฯ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00006",
				priority: "2.4.6",
				question: 'สุขศึกษาและพลศึกษา',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00007",
				priority: "2.4.7",
				question: 'การงานอาชีพ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00008",
				priority: "2.4.8",
				question: 'ภาษาต่างประเทศ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c00009",
				priority: "2.4.9",
				question: 'กิจกรรมพัฒนาผู้เรียน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00001"
			},
			// 4.2 โรงเรียนได้สนับสนุนและส่งเสริมให้ครูจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education) ในรายวิชาหรือกิจกรรมในลักษณะใดบ้าง
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20001",
				priority: "4.2.1",
				question: 'รายวิชาพื้นฐาน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20002",
				priority: "4.2.2",
				question: 'รายวิชาเพิ่มเติม',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20003",
				priority: "4.2.3",
				question: 'กิจกรรมพัฒนาผู้เรียน',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20004",
				priority: "4.2.4",
				question: 'การทำโครงงานวิทยาศาสตร์/สิ่งประดิษฐ์ทางวิทยาศาสตร์',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20005",
				priority: "4.2.5",
				question: 'กิจกรรมค่าย / Walk Rally',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20006",
				priority: "4.2.6",
				question: 'การจัดนิทรรศการ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20007",
				priority: "4.2.7",
				question: 'การทัศนศึกษา / ศึกษาดูงาน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c20008",
				priority: "4.2.8",
				question: 'อื่นๆ',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00002"
			},
			// 4.3  โรงเรียนได้สนับสนุนและส่งเสริมให้ครูจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education) 
			// ในรูปแบบใดบ้าง
			{
				id: "108609d2-8f37-44ff-b6d2-000004c30001",
				priority: "4.3.1",
				question: 'การบูรณาการภายในวิชา (Disciplinary integration)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c30002",
				priority: "4.3.2",
				question: 'การบูรณาการแบบพหุวิทยาการ (Multidisciplinary integration)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c30003",
				priority: "4.3.3",
				question: 'การบูรณาการแบบสหวิทยาการ (Interdisciplinary integration)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00003"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c30004",
				priority: "4.3.4",
				question: 'การบูรณาการแบบข้ามสาขาวิชา (Transdisciplinary integration)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00003"
			},
			// 4.4  โรงเรียนได้สนับสนุนและส่งเสริมให้ครูจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education) 
			// โดยได้ดำเนินการจัดทำสิ่งใดบ้าง 

			{
				id: "108609d2-8f37-44ff-b6d2-000004c40001",
				priority: "4.4.1",
				question: 'มีหน่วยการเรียนรู้บูรณาการสะเต็มศึกษา (STEM Education)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00004"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c40002",
				priority: "4.4.2",
				question: 'มีแผนการจัดการเรียนรู้บูรณาการสะเต็มศึกษา (STEM Education)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00004"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c40003",
				priority: "4.4.3",
				question: 'มีนวัตกรรม/สื่อการเรียนรู้/ชุดกิจกรรมบูรณาการสะเต็มศึกษา (STEM Education)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00004"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c40004",
				priority: "4.4.4",
				question: 'อื่นๆ',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00004"
			},
			// 	question: "4.5  โรงเรียนได้มีการส่งเสริม สนับสนุนให้ครูบูรณาการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education) ในสาระที่ 4 เทคโนโลยี ของกลุ่มสาระการเรียนรู้วิทยาศาสตร์ ตามหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 (ฉบับปรับปรุง พ.ศ. 2560 ) หรือไม่ อย่างไร",
			{
				id: "108609d2-8f37-44ff-b6d2-000004c50001",
				priority: "4.5.1",
				question: 'สาระที่ ว 4.1 การออกแบบและเทคโนโลยี (โปรดอธิบาย)',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00005"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c50002",
				priority: "4.5.2",
				question: 'สาระที่ ว 4.2 วิทยาการคำนวณ (โปรดอธิบาย)',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00005"
			},
			// 4.6  โรงเรียนได้มีการบูรณาการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education) กับนโยบายหรือโครงการต่างๆ หรือไม่
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60001",
				priority: "4.6.1",
				question: 'การจัดการเรียนการสอนวิชา IS ตามหลักสูตรโรงเรียนมาตรฐานสากล',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60002",
				priority: "4.6.2",
				question: 'ปรัชญาของเศรษฐกิจพอเพียง',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60003",
				priority: "4.6.3",
				question: 'โรงเรียนอนุรักษ์พลังงานและสิ่งแวดล้อม / โรงเรียนปลอดขยะ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60004",
				priority: "4.6.4",
				question: 'โครงการสวนพฤกษศาสตร์โรงเรียน ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60005",
				priority: "4.6.5",
				question: 'ค่านิยม 12 ประการ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60006",
				priority: "4.6.6",
				question: 'การจัดการเรียนการสอนแบบ Active Learning',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60007",
				priority: "4.6.7",
				question: 'การจัดการเรียนการสอนเพื่อพัฒนาทักษะในศตวรรษที่ 21',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60008",
				priority: "4.6.8",
				question: 'การจัดการศึกษาเพื่อการมีงานทำ ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60009",
				priority: "4.6.9",
				question: 'โรงเรียนสุจริต / โรงเรียนคุณธรรม',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60010",
				priority: "4.6.10",
				question: 'Thailand 4.0',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000004c60011",
				priority: "4.6.11",
				question: 'อื่นๆ',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000004c00006"
			},
			// 5.1  โรงเรียนมีสื่อ วัสดุอุปกรณ์ที่สนับสนุนการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)
			{
				id: "108609d2-8f37-44ff-b6d2-000005c10001",
				priority: "5.1.1",
				question: 'ใช้สื่อ วัสดุอุปกรณ์ร่วมกับการเรียนการสอนปกติ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c10002",
				priority: "5.1.2",
				question: 'มีวัสดุอุปกรณ์ตามกิจกรรมสะเต็มศึกษาของ สสวท.',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c10003",
				priority: "5.1.3",
				question: 'Lego',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c10004",
				priority: "5.1.4",
				question: 'Alduno',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c10005",
				priority: "5.1.5",
				question: 'Microbit  ',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c10006",
				priority: "5.1.6",
				question: 'อื่นๆ',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},

			{
				id: "108609d2-8f37-44ff-b6d2-000005c20001",
				priority: "5.2.1",
				question: 'ห้องปฏิบัติการสะเต็มศึกษา (STEM Education)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c20002",
				priority: "5.2.2",
				question: 'ศูนย์การเรียนรู้สะเต็มศึกษา (STEM Education)',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c20003",
				priority: "5.2.3",
				question: 'ห้องสมุดสะเต็มศึกษา (STEM Education) หรือ มุมสะเต็มศึกษา (STEM Education) ในห้องสมุดของโรงเรียน',
				type: "BOOLEAN",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
			{
				id: "108609d2-8f37-44ff-b6d2-000005c20004",
				priority: "5.2.4",
				question: 'อื่นๆ',
				type: "OPEN_END",
				detail: "",
				cf_sub_section_id: "848609d2-8f37-44ff-b6d1-000005c00001"
			},
		]
		await queryInterface.bulkInsert('cfq_sub_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('cfq_sub_section', {});
	}
}