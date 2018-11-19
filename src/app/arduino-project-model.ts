export class ArduinoProjectModel {
	id: number;
	title: string;
	description: string;
	dateCreated: string;
	dateCompleted: string;
	imagePath: string;
	moreImagesPath?: string[];
	imageCaption?: string[];
	videoUrl?: string;
	videoImage?: string;
	components: string[];
	libraries: string[];
	duration?: number;
//
//	constructor(){
//		this.duration: Date = this.dateCompleted;
//	}
}
