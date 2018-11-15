class GalleryImagesController < ApplicationController



  def index
    @image = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

private

  def person_params
    params.require(:image).permit(:src, :title, :, :phone, :email)
  end

end
