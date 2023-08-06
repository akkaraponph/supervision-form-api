module.exports = {
	up: async (queryInterface) => {
		seedData = [
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d5ba1",
				type: "1. ด้านการบริหารจัดการ",
				priority: "1",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1"
			},
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d5ba2",
				type: "2. ด้านอาคารสถานที่",
				priority: "2",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1"
			},
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d5ba3",
				type: "3. ด้านครูผู้สอน",
				priority: "3",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1"
			},
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d5ba4",
				type: "4. ด้านการส่งเสริมการจัดการเรียนรู้",
				priority: "4",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1"
			},
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d5ba5",
				type: "5. ด้านนโยบายเรียนฟรี 15 ปี",
				priority: "5",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1"
			},

			// ==================
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d2ba1",
				type: "1. ด้านนโยบายการจัดการศึกษาของกระทรวงศึกษาธิการ",
				priority: "1",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba2"
			},
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d2ba2",
				type: "2. ด้านนโยบายการจัดการศึกษาของสำนักงานคณะกรรมการขั้นพื้นฐาน",
				priority: "2",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba2"
			},
			{
				id: "e46263e9-cd10-4bd8-b040-ff550a0d2ba3",
				type: "3. ด้านนโยบายและมาตรการความปลอดภัยของผู้เรียน",
				priority: "3",
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba2"
			},
		
		]
		await queryInterface.bulkInsert('rsf_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('rsf_section', {});
	}
}